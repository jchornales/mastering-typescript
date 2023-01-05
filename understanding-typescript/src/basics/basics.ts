// let fruits = ["Banana", "Pineapple", "Strawberry"];
// const additionalFruits = ["Mangoe", "Orange"];
// additionalFruits.push(...fruits); //Spread Operator
// console.log(additionalFruits);

// function generateError(message: string, code: number): never {
//     throw { message: message, errorCode: code };
// }

// generateError("An Error Occured!", 504);

// ... serves as Rest parameter
function add(...numbers: number[]) {
    return numbers.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    });
}

console.log(add(5, 25, 23, 22, 21));
