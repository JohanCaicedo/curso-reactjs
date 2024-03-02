import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const defaultTodos =[
  {text:'Terminar esta linea', complited:true},
  {text:'Terminar curso React.js', complited:false},
  {text:'Hacer los cambios a la pagina de la red', complited:false},
  {text:'Hacer el portafolio', complited:false},
  {text:'Hacer la ilustracón del 8M', complited:false}
];

function App() {
  return (
    <>
      <TodoCounter complited={16} total={60} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            complited={todo.complited}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
