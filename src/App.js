import React from "react";
import "./css/App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./css/index.css";

function App() {
  const [todos, setTodos] = React.useState(() => {
    const localStorageTodos = localStorage.getItem('Todos-v2');
    if (!localStorageTodos) {
      const initialTodos = [];
      localStorage.setItem('Todos-v2', JSON.stringify(initialTodos));
      return initialTodos;
    } else {
      return JSON.parse(localStorageTodos);
    }
  });

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const lowerCaseText = todo.text.toLowerCase();
    const lowerCaseSearchValue = searchValue.toLowerCase();
    return lowerCaseText.includes(lowerCaseSearchValue);
  });


  const saveTodos = (newTodos) => {
    localStorage.setItem('Todos-v2', JSON.stringify(newTodos));
    setTodos (newTodos);

  }

  const doneTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deletedTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => doneTodo(todo.text)}
            onDelete={() => deletedTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
