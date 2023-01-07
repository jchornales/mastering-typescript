// You can have multiple functions with the same name but different parameter types and return type. However, the number of parameters should be the same.

function addNumbers(a: number, b: number): number;
function addNumbers(a: string, b: string): string;
function addNumbers(a: number, b: string): string;
function addNumbers(a: string, b: number): string;
function addNumbers(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }

    return a + b;
}

// const result = addNumbers(1, 5); //typescript doesn't know if whether the result is a string or a number

const result = addNumbers("25", "26");
result.split(""); // we can't use split without function overload because the result is still considered by typescript as Combinable and not 'string'
