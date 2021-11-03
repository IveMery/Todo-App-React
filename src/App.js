import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { UserProvider} from "./contexts/UserTodosContext"
//modularizar por componentes
//agregar modo oscuro

function App() {
  return (
    <>
    <UserProvider>
     
      <div className="container mt-4 bg-dark text-white">
      <h1 className='text-center'>Todo App</h1>
        <div className="row">
          <div className="col-8">
           <TodoList/>
          </div>
          <div className="col-4">
           <TodoForm/>
          </div>
        </div>

      </div>
      </UserProvider>
    </>
  );
}

export default App;
