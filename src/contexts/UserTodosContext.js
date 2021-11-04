import React from 'react'
import { createContext, useState } from 'react'
import uuid from 'react-uuid'

const UserTodosContext = createContext()

const UserProvider = ({ children, }) => {

    const initialTodos = [
        {
            title: 'tarea1',
            completed: false,
            id: uuid()
        },
        {
            title: 'tarea2',
            completed: false,
            id: uuid()
        }
    ]

    const [todo, setTodo] = useState(initialTodos)
    const [todoEdit, setTodoEdit] = useState(null)

    //agregarTodo

    const todoAdd = (task) => {

        const newTodo = {
            ...task,
            completed: false,
            id: uuid()
        }

        const changedTodos = [
            ...todo,
            newTodo
        ]

        setTodo(changedTodos)
    }


    //Eliminar Tarea
    const todoDelete = (todoId) => {
        const deleteTodo = todo.filter(item => item.id !== todoId)
        setTodo(deleteTodo)
    }

    //completar tarea
    const todoToggleCompleted = (todoId) => {

        const completedTodo = todo.map(item => (
            item.id === todoId ? {
                ...item,
                completed: !item.completed
            } :
                item
        ))
        setTodo(completedTodo)
    }
    console.log(todoEdit);

    //Editar Tarea
    const updateTodo = (task) => {

        const update = todo.map(item => (
            item.id === task.id
                ? task : item
        ))
        setTodo(update)
    }

    const data = { todo, setTodo, todoAdd, todoDelete, todoToggleCompleted, setTodoEdit, todoEdit, updateTodo }

    return (
        <UserTodosContext.Provider value={data}>
            {children}
        </UserTodosContext.Provider>
    )
}

export { UserProvider }
export default UserTodosContext;
