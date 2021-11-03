import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserTodosContext from './contexts/UserTodosContext'
import List from './List'

const TodoList = () => {
    // const [todo, setTodo] = useState(['tarea1', 'tarea2'])

    const { todo } = useContext(UserTodosContext)
    const [complete, setComplete] = useState(false)
    console.log(todo);

    const todoComplete = () => {

        setComplete(!false)
    }

    return (
        <div> 
            <h3>Lista de Tareas</h3>
            {
                todo.length === 0
                 ? 
                 <div className=" alert alert-primary">
                    No ha tareas, por favor agrega algunas...
                </div>
                :
                <article className="card">
                <div className='card-body'>
                    <ul>
                        {
                            todo.map(list => (
                                <List key={list.id}
                                    title={list.title}
                                    id={list.id}
                                    completed={list.completed}
                                    list={list} />
                            ))
                        }

                    </ul>
                </div>
            </article>

            }
            
           
        </div>
    )
}

export default TodoList
