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
  { text: "Hacer la ilustracón del 8M", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <div className="left-column">
          <TodoCounter completed={16} total={60} />
          <TodoSearch />
        </div>
        <div className="right-colum todo-list-container">
          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
