import React, { useEffect, useState, useContext } from 'react'
import uuid from 'react-uuid'
import UserTodosContext from './contexts/UserTodosContext'

const TodoForm = () => {

    const { todo, setTodo, todoEdit, updateTodo, todoAdd, setTodoEdit } = useContext(UserTodosContext)
    const initialForm = {
        title: ""

    }
    const [inputValue, setInputValue] = useState(initialForm)
    const { title } = inputValue
    const [error, setError] = useState("")
    const [messageOk, setMessageOk] = useState("")

    const handleChange = e => {
        // setInputValue(e.target.value)
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value });
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

//necesito arreglar si al editar se borra el campo poner un mensaje
//de edita antes de enviar
        if (title.trim() === "") {
            setError("Agrega alguna tarea!")
            setTodoEdit(null)
            setTimeout(() => {
                setError(false)
            }, 2000)
            return
        } 
          


        // //agregar Tarea
        // todoAdd(inputValue);
        setInputValue(initialForm)

        //editar Tarea
        if (todoEdit) {
            updateTodo(inputValue)
            setMessageOk("Editado con exito!")
        

        } else {
            //agregar Tarea
            todoAdd(inputValue);
            setMessageOk("Agregado con exito!")
        
        }
        

        setTimeout(() => {
            setMessageOk(false)
            setTodoEdit(null)
        }, 2000)




    }

    // useEffect(() => {
    //     let todos = localStorage.getItem('todo')
    //     if (todos) {
    //         todos = JSON.parse(todos)
    //         setTodo(todos)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('todo', JSON.stringify(todo))
    // }, [todo])

    useEffect(() => {
        todoEdit &&
            setInputValue(todoEdit) //aca recibe el objeto que clickeamos
    }, [todoEdit])

    return (
        <div>
            <h1>{todoEdit ? 'Editar Tarea' : 'Agrega una tarea'}</h1> 
           {todoEdit &&  <button className="btn btn-warning mb-2" 
           onClick={()=>setTodoEdit(null)}>Cancelar Edicion</button>}
            <form className="form-control" onSubmit={handleSubmit}>
                <input
                    className="mb-2 form-control"
                    type="text"
                    placeholder="Escribe una tarea"
                    value={title}
                    name="title"
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
                        {error}
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
