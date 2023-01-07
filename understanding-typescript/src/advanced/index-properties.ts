//  flexible interface that can be used in any form with different input, different identifiers
//  use if uncertain which exact properties will be there
interface ErrorContainer {
    // uncertain what property will be there I just know that the type will be string
    // id: string; // number type can't be used because of index property
    [key: string]: string; //boolean can't be use this case
    // * index properties gives flexibility that the developer doesn't need to know in advance which property name should be used and how many properties are needed
}

const errorBag: ErrorContainer = {
    // in this case it is possible to add more properties as much as needed.
    email: "Not a valid email!!",
    username: "Must start with a capital character!",
};
