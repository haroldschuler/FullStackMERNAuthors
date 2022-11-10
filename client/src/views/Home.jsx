import React from 'react'
import {Link} from 'react-router-dom';
import AuthorTable from '../components/AuthorTable';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    
    const [authors,setAuthors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors/all')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err));
    },[])

    return (
        <div>
            <Link to={'/new'}>Add an author</Link>
            <AuthorTable authors={authors}/>
        </div>
    )
}

export default Home