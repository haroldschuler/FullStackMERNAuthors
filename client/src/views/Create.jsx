import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { useState } from 'react';

const Create = () => {
    const [errorMessages, setErrorMessages] = useState([])
    const navigate = useNavigate();
    const createAuthor = (input) => {
        axios.post("http://localhost:8000/api/author/new",input)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                const tempErrorMessages = [...errorMessages,err.response.data.error.errors.name.message];
                setErrorMessages(tempErrorMessages)
            });
    }


    return (
        <div>
            <Link to={'/'}>Home</Link>
            <p>Add a new author:</p>
            <br></br><br></br>
            <AuthorForm formSubmit={createAuthor} formErrors={errorMessages}/>
        </div>
    )
}

export default Create