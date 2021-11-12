import { useState } from 'react'

const useModal = () => {
    const [modal, setModal] = useState()

    const handleModal = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    return {
        handleModal,
        handleClose,
        modal
    }
}

export default useModal
