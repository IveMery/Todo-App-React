import React, { useEffect, useState, useContext } from 'react'
import UserTodosContext from '../contexts/UserTodosContext'
import Form from "../components/Form"
import Input from '../components/Input'
import Title from '../components/Title'
import Container from '../components/Container'
import Button from '../components/Button'

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

    const handleSubmit = e => {
        e.preventDefault()

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

    useEffect(() => {
        let localtodos = JSON.parse(localStorage.getItem('todo'))
        if (localtodos)
            setTodo(localtodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    useEffect(() => {
        todoEdit &&
            setInputValue(todoEdit) //aca recibe el objeto que clickeamos
    }, [todoEdit])

    const handleClickCancelEditition = () => {
        setTodoEdit(null)
        setInputValue(initialForm)
    }

    return (
        <>
            <Title className="mt-3">{todoEdit ? 'Editar Tarea' : 'Agrega una tarea'}</Title>
            {todoEdit && <Button className="btn btn-warning mb-2"
                onClick={handleClickCancelEditition}>Cancelar Edicion</Button>}
            <Form className="form-control" onSubmit={handleSubmit}>
                <Input
                    className="mb-2 form-control"
                    type="text"
                    placeholder="Escribe una tarea"
                    value={title}
                    name="title"
                    onChange={handleChange}
                />
                <Button
                    className="btn btn-primary mt-2"
                    type='submit'
                    onSubmit={handleSubmit}> {
                        todoEdit ? 'Editar' : 'Agregar'
                    }
                </Button>
                {error &&
                    <Container
                        className="alert alert-danger mt-2"
                        role="alert">
                        {error}
                    </Container>}
                {messageOk &&
                    <Container
                        className="alert alert-success mt-2"
                        role="alert">
                        {messageOk}
                    </Container>}
            </Form>
        </>
    )
}

export default TodoForm
