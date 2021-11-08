import React from 'react'
import { useContext, useState } from 'react'
import UserTodosContext from '../contexts/UserTodosContext'
import ModalDelete from './ModalDelete'
import useModal from '../hooks/useModal'
import Container from '../components/Container'
import Button from '../components/Button'
import ListItem from '../components/ListItem'
import "../style.css/list.css"


const List = ({ title, id, completed, list }) => {

    const { handleModal, handleClose, modal } = useModal()
    const { todoDelete, todoToggleCompleted, setTodoEdit } = useContext(UserTodosContext)

    return (
        <>
            <Container className="d-flex justify-content-between flex-wrap text-dark border-rounded mt-2 list p-3">
                <ListItem className="list-unstyled">{title}</ListItem>
                <Container>
                    <Button className={`btn ${completed ? 'btn-success' : 'btn-outline-success'} btn-sm mb-2 mx-2`}
                        onClick={() => todoToggleCompleted(id)}
                    >{completed
                        ? 'Completado'
                        : 'Completar'}
                    </Button>
                    <Button className='btn btn-warning  btn-sm mb-2 mx-2'
                        onClick={() => setTodoEdit(list)}
                    >Editar</Button>
                    <Button className='btn btn-danger btn-sm mb-2'
                        onClick={handleModal}
                    >Eliminar</Button>
                </Container>
            </Container>
            {modal && <ModalDelete todoDelete={todoDelete} id={id} handleClose={handleClose} />}
        </>
    )
}

export default List
