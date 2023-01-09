// * this is an example where trying to store the object in a variable and try to access it without creating generic function
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: "Justine" }, { age: 23 });
// mergeObj.age; // we can't directly access 'name' or 'age because typescript doesn't know these 2 properties exists, it doesn't carry the information we needed

// * an example on generic type function
function merge<T extends object, U>(objA: T, objB: U) {
    // this is a way of telling typescript that objA & objB has their own set of unique parameter
    return Object.assign(objA, objB);
} // this

// this shows that generic type function is dynamically called.
const mergeObj = merge({ name: "Justine" }, { age: 23 });
const mergeObj2 = merge(
    { name: "Justine", hobbies: ["Painting", "Gaming"] },
    { age: 23 },
);

// * by using generic type we don't have to do this anymore because generic types allows developer to fill in different concrete types for different function calls
//const mergeObj = merge<{name:string},{age:number}>({ name: "Justine" }, { age: 23 });
// we don't need to do the above line of code because typescript simply infers the type of the values we're passing as arguments

// without 'extends object' constraint we get the error for the first argument, is a consequence of the Object.assign definition in native JS.

// console.log(Object.assign(null, {foo: 'bar'}));   // error
// console.log(Object.assign({foo: 'bar'}, null));   // ok

//  in Typescript 4.7.4 Type parameters are no longer assignable to {} in strictNullChecks
//https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#type-parameters-no-longer-assignable-to-in-strictnullchecks

interface Length {
    length: number;
}

// this can serve as a substitute for function overload to deal with union types, because it doesn't care  what type of elements it get's
// if a function need flexibility then generic function is the answer
function countAndPrint<T extends Length>(element: T): [T, string] {
    let descriptionText = "Got no Value.";
    if (element.length > 1) {
        descriptionText = `Got ${element.length} values`;
    }
    return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U,
) {
    return `${obj[key]}`;
}

extractAndConvert({ name: "Justine" }, "name");
