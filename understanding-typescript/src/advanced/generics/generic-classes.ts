class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }
    // it's also possible to create an generic type method if it's needed
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

// We create generic class if uncertain what data type will be stored in DataStorage
// it's possible to store any primitive data type by using generic classes
const textStorage = new DataStorage<string>();
textStorage.addItem("Shoes");
