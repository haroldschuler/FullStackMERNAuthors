import React from 'react'
import { useState } from 'react'
import style from '../views/Home.module.css'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const AuthorTable = (props) => {
    const [removedIds, setRemovedIds] = useState([]) 
    const removeFromDom = (id) => {
        setRemovedIds([...removedIds, id])
    }

    return (
        <div className={style.centerDiv}>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.filter( author => !removedIds.includes(author._id)).map( author => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td><EditButton id={author._id}/> | <DeleteButton id={author._id} onDelete={removeFromDom}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorTable