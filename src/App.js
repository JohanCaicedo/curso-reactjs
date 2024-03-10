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
  { text: "Hacer la ilustración del 8M", completed: false },
];

function App() {
  const [todos, stetTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter (
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;



  const [searchValue, setSearchValue] = React.useState ("");
  console.log('Los usuarios buscaron en ' + searchValue);
  
  return (
    <React.Fragment>
      <div className="app-container">
        <div className="left-column">
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
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
