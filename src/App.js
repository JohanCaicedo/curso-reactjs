import React from "react";
import "./css/App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./css/index.css";

const defaultTodos = [
  { text: "Terminar esta linea", completed: true },
  { text: "Terminar curso React.js", completed: false },
  { text: "Hacer los cambios a la pagina de la red", completed: false },
  { text: "Hacer el portafolio", completed: false },
  { text: "Comer pastel", completed: false },
  { text: "Cambiar el cajón", completed: false },
  { text: "Caminar por la playa", completed: true },
  { text: "Volar en avión", completed: true },
  { text: "Uno cuando volé", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const lowerCaseText = todo.text.toLowerCase();
    const lowerCaseSearchValue = searchValue.toLowerCase();
    return lowerCaseText.includes(lowerCaseSearchValue);
  });

  const doneTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deletedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
            onCompleted={() =>doneTodo(todo.text)}
            onDelete={() =>deletedTodo(todo.text)}
            
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
