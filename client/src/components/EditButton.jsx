import React from 'react'
import { useNavigate } from 'react-router-dom';

const EditButton = (props) => {

    const navigate = useNavigate();

    const clickEdit = () => {
        navigate(`/edit/${props.id}`)
    }

    return (
        <button onClick={ clickEdit }>Edit</button>
    )
}

export default EditButton