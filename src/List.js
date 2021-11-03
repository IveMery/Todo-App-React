import React from 'react'
import { useContext } from 'react'
import UserTodosContext from './contexts/UserTodosContext'

const List = ({ title, id, completed }) => {

    const { todo, todoDelete, todoToggleCompleted, setTodoEdit } = useContext(UserTodosContext)
    console.log(completed);

    return (
        <div className="d-flex justify-content-between  text-dark">
            <li>{title}</li>
            <div>
                <button className={`btn ${completed ? 'btn-success' : 'btn-outline-success'} btn-sm mb-2 mx-2`}
                    onClick={() => todoToggleCompleted(id)}
                >{completed ? 'Completado' : 'Completar'}

                </button>
                <button className='btn btn-warning  btn-sm mb-2 mx-2'
                    onClick={() => setTodoEdit(title)}
                >Editar</button>
                <button className='btn btn-danger  btn-sm mb-2'
                    onClick={() => todoDelete(id)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default List
