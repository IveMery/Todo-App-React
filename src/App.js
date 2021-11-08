import React from "react";
import TodoForm from "./views/TodoForm";
import TodoList from "./views/TodoList";
import { UserProvider } from "./contexts/UserTodosContext"
import NavBar from "./views/NavBar";
import Container from "./components/Container";
import './style.css/style.css'

const App = () => {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Container className="container-fluid vh-100  text-white">
          <Container className="row d-flex  flex-wrap-reverse">
            <Container className=" col-xs-12 col-md-8">
              <TodoList />
            </Container>
            <Container className="col-md-4 col-xs-12 ">
              <TodoForm />
            </Container>
          </Container>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
