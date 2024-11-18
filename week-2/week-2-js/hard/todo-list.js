/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/


class Todo {
  constructor () {
    this.todos = [];
  } 

  add(todo) {
    this.todos.push(todo)
  }

  getAll() {
    return this.todos
  }

  clear() {
    this.todos = []
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.todos.length && indexOfTodo >= 0) {
      return this.todos[indexOfTodo]
    }
    else{
      return null
    }
  }

  remove(indexOfTodo) {
    if (indexOfTodo < this.todos.length && indexOfTodo >= 0) {
      this.todos.splice(indexOfTodo, 1)
      return true
    }
    else {
      return null
    }
  }

  update(index, updatedTodo) {
    if (index < this.todos.length && index >= 0 && updatedTodo) {
      this.todos[index] = updatedTodo
    }
    else {
      console.log("invalid index or updated todo is faulty")
    }
  }
}

module.exports = Todo;
