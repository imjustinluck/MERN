import React, { useState, useEffect } from "react"
import { navigate, Link } from "@reach/router"
import axios from "axios"

const ViewComponent = ({ id }) => {

    const [errorState, setErrorState] = useState({})

    const [pet, setPet] = useState({})

    const deletePet = e => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {setPet(res.data)})
            .catch(err => setErrorState(err.response.data))
    }, [])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Link to="/">back to home</Link>
            <h1>Details about: {pet.name}</h1>
            <button onClick={deletePet}>Adopt {pet.name}!</button>
            <table className="table w-50">
                <tr>
                    <td>Pet Type:</td>
                    <td>{pet.type}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{pet.description}</td>
                </tr>
                <tr>
                    <td>Skills:</td>
                    <td>
                        {pet.skill1}<br />
                        {pet.skill2}<br />
                        {pet.skill3}
                    </td>
                </tr>
            </table>
        </div>
    )

}
export default ViewComponent