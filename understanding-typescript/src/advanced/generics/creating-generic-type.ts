function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
}

console.log(merge({ name: "Max" }, { age: 30 }));
