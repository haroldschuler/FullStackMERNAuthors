import React from 'react'
import { useNavigate } from 'react-router-dom'

const CancelButton = () => {
    const navigate = useNavigate();
    const clickCancel = () => {
        navigate('/')
    }

    return (
        <button type="button" onClick={ clickCancel }>Cancel</button>
    )
}

export default CancelButton