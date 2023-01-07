// const userInput = <HTMLInputElement>document.getElementById("user-input");

//* commonly used in React to avoid clashing with JSX
// const userInput = document.getElementById("user-input") as HTMLInputElement; // only use if certain that this element exist in html

// * this type casting technique is commonly use when uncertain if the element exist or not.
const userInput = document.getElementById("user-input");
if (userInput) {
    (userInput as HTMLInputElement).value = "Hello world!"; //
}
