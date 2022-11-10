import React from 'react'
import AuthorForm from '../components/AuthorForm'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Edit = () => {
    const [errorMessages, setErrorMessages] = useState([])
    const { id } = useParams();
    const [author, setAuthor] = useState({})
    const navigate = useNavigate();

    const updateAuthor = (input) => {
        axios.put(`http://localhost:8000/api/author/edit/${id}`,input)
            .then( res => {
                navigate('/')
            })
            .catch(err => {
                const tempErrorMessages = [...errorMessages,err.response.data.error.errors.name.message];
                setErrorMessages(tempErrorMessages)
            });
    }

    useEffect( () => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthor(res.data)
            })
            .catch(err => console.log(err));
    },[id])

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <p>Edit this author:</p>
            <br></br><br></br>
            <AuthorForm formSubmit={updateAuthor} formErrors={errorMessages} author={author}/>
        </div>
    )
}

export default Edit