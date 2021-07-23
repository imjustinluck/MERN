import React, { useState } from "react"

const FormComponent = ({ start, callback, errorState }) => {

    const [formState, setFormState] = useState({
        "name": start.name,
        "type": start.type,
        "description": start.description,
        "skill1": start.skill1,
        "skill2": start.skill2,
        "skill3": start.skill3
    })

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        callback(formState)
    }

    return (

        <div>
            <form onSubmit={submitHandler}>
                <div style={{display:"flex"}}>
                    <div>
                        <h3>Pet Name:</h3>
                        <input value={formState.name} type="text" name="name" onChange={changeHandler} />
                        {(errorState.name) && <p>{errorState.name}</p>}
                        <h3>Pet Type:</h3>
                        <input value={formState.type} type="text" name="type" onChange={changeHandler} />
                        {(errorState.type) && <p>{errorState.type}</p>}
                        <h3>Description:</h3>
                        <input value={formState.description} type="text" name="description" onChange={changeHandler} />
                        {(errorState.description) && <p>{errorState.description}</p>}
                    </div>
                    <div>
                        <h3>Skill 1:</h3>
                        <input value={formState.skill1} type="text" name="skill1" onChange={changeHandler} />
                        <h3>Skill 2:</h3>
                        <input value={formState.skill2} type="text" name="skill2" onChange={changeHandler} />
                        <h3>Skill 3:</h3>
                        <input value={formState.skill3} type="text" name="skill3" onChange={changeHandler} />
                    </div>
                </div>
                <p>(skills optional)</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent