import axios from 'axios'
import React from 'react'

const DeleteButton = (props) => {

    const clickDelete = () => {
        axios.delete(`http://localhost:8000/api/author/delete/${props.id}`)
            .then( res => {
                props.onDelete(props.id)
            })
            .catch()
    }

    return (
        <button onClick={ clickDelete }>Delete</button>
    )
}

export default DeleteButton