import React from 'react'
import { useState } from 'react'
import CancelButton from './CancelButton'
import style from '../views/Home.module.css'
import { useEffect } from 'react'

const AuthorForm = (props) => {
    const [input, setInput] = useState({
        name: props.author ? props.author.name : ""
    });
    useEffect( () => {
        if(props.author) {
            setInput({...input,name: props.author.name});
        }
    },[props])
    

    const changeInput = (e) => {
        const inputCopy = {...input, [e.target.name]: e.target.value}
        setInput(inputCopy)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.formSubmit(input);
        setInput({
            name: ""
        });
    }

    return (
        <div className={style.centerDiv}>
            <div className={style.formDivStyle}>
                {props.formErrors.map( (error,idx) => {
                    return <p key={idx} style={{color: "red"}}>{error}</p>
                })}
                <form onSubmit={ (e) => submitHandler(e) }>
                    <label>Name </label>
                    <input name="name" onChange={ (e) => changeInput(e) } value={input.name}></input>
                    <br></br>
                    <p>
                        <button type="submit">Submit</button> <CancelButton />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm