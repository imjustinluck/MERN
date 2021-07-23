import React, { useState, useEffect } from "react"
import { navigate, Link } from "@reach/router"
import axios from "axios"
import FormComponent from "./FormComponent"

const EditComponent = ({ id }) => {

    const [errorState, setErrorState] = useState({})

    const [pet, setPet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {setPet(res.data)})
            .catch(err => setErrorState(err.response.data))
    }, [])

    const editPet = pet => {
        axios.put(`http://localhost:8000/api/pets/${id}`, pet)
            .then(res => navigate("/"))
            .catch(err => {
                if(err.response.data.name=="MongoError"){
                    setErrorState({"name":"Must be a unique name"})
                }
                else{
                    const {errors} = err.response.data
                    const errorObj = {}
                    for(let [key, value] of Object.entries(errors)){
                        errorObj[key] = value.message
                    }
                    setErrorState(errorObj)
                }
            })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to="/">back to home</Link>
            <h1>Edit {pet.name}</h1>
            {
                pet.name && <FormComponent start={pet} callback={editPet} errorState={errorState} />
            }
        </div>
    )
}

export default EditComponent