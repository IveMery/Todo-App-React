import React, { useEffect, useState, useContext } from 'react'
import uuid from 'react-uuid'
import UserTodosContext from './contexts/UserTodosContext'

const TodoForm = () => {

    const { todo, setTodo, todoEdit, updateTodo } = useContext(UserTodosContext)

    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState(false)
    const [messageOk, setMessageOk] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim() === "") {
            setError(!false)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }else {
            setTodo([
                {
                    title: inputValue,
                    completed: false,
                    id: uuid()
                }, ...todo])
        }

        if (inputValue.trim()) {


            setInputValue("")
            setMessageOk('Agregado con exito!')
            setTimeout(() => {
                setMessageOk(false)
            }, 2000)
        }
        if (todoEdit) {
            updateTodo(inputValue)
        } 

    }

    useEffect(() => {
        let todos = localStorage.getItem('todo')
        if (todos) {
            todos = JSON.parse(todos)
            setTodo(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    useEffect(() => {
        todoEdit &&
            setInputValue(todoEdit)
    }, [todoEdit])

    return (
        <div>
            <h1>{todoEdit ? 'Editar Tarea' : 'Agrega una tarea'}</h1>
            <form className="form-control" onSubmit={handleSubmit}>
                <input
                    className="mb-2 form-control"
                    type="text"
                    placeholder="Escribe una tarea"
                    value={inputValue}
                    onChange={handleChange}
                />

                <button
                    className="btn btn-primary mt-2"
                    type='submit'
                    onSubmit={handleSubmit}> {
                        todoEdit ? 'Editar' : 'Agregar'
                    }

                </button>
                {error &&
                    <div
                        className="alert alert-danger mt-2"
                        role="alert">
                        Agrega alguna tarea!
                    </div>}
                {messageOk && <div
                    className="alert alert-success mt-2"
                    role="alert">
                    {messageOk}
                </div>}
            </form>
        </div>
    )
}

export default TodoForm
