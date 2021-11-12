import React from 'react'
import { useState ,useContext } from 'react'
import UserTodosContext from '../contexts/UserTodosContext'
import List from './List'
import Title from '../components/Title'
import UnorderedList from '../components/UnorderedList'
import Card from '../components/Card'
import Container from '../components/Container'

const TodoList = () => {

    const { todo } = useContext(UserTodosContext)
    const [complete, setComplete] = useState(false)
    console.log(todo);

    const todoComplete = () => {

        setComplete(!false)
    }

    return (
        <>
            <Title className="mt-2 mb-2">Lista de Tareas</Title>
            {
                todo.length === 0
                    ?
                    <Container className=" alert alert-primary">
                        No ha tareas, por favor agrega algunas...
                    </Container>
                    :
                    <Card className="card mt-3 mb-2">
                        <Container className='card-body'>
                            <UnorderedList>
                                {
                                    todo.map(list => (
                                        <List key={list.id}
                                            title={list.title}
                                            id={list.id}
                                            completed={list.completed}
                                            list={list}
                                        />
                                    ))
                                }
                            </UnorderedList>
                        </Container>
                    </Card>
            }
        </>
    )
}

export default TodoList
