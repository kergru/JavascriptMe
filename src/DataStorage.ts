// Generic classes
export class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.slice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}