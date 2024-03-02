import React from "react";
import "./css/App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const defaultTodos = [
  { text: "Terminar esta linea", complited: true },
  { text: "Terminar curso React.js", complited: false },
  { text: "Hacer los cambios a la pagina de la red", complited: false },
  { text: "Hacer el portafolio", complited: false },
  { text: "Hacer la ilustracón del 8M", complited: false },
];

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="d-flex flex-column align-items-center">
              <TodoCounter complited={16} total={60} />
              <TodoSearch />
            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-end">
            <TodoList>
              {defaultTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  complited={todo.complited}
                />
              ))}
            </TodoList>
            <CreateTodoButton/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
