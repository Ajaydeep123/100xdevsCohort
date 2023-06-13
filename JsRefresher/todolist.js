/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  remove(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = updatedTodo;
    }
  }
  getAll() {
    return this.items;
  }
  get(index) {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return null;
  }
  clear() {
    return this.items.splice(0, this.items.length);
  }
}

module.exports = Todo;
