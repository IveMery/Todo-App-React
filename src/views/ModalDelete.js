import React from 'react'
import { Modal, Button } from "react-bootstrap";
import useModal from '../hooks/useModal';


const ModalDelete = ({ todoDelete, id, handleClose, }) => {

  const { handleModal } = useModal()

  return (
    <Modal show={handleModal} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>Estas seguro que quieres eliminar esta tarea?</Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleClose}>
          No
        </Button>
        <Button variant="danger" onClick={() => todoDelete(id)} >
          Si,eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete
