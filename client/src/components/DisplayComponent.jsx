import React, {useState , useEffect} from "react"
import {Link} from "@reach/router"
import axios from "axios"

const DisplayComponent = () => {

    const [petList, setPetList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPetList(res.data))
            .catch(err => console.log(err))
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Link to="/pets/new">add a pet to the shelter</Link>
    
            <h1>These pets are looking for a good home!</h1>
            <table className="table table-dark w-50">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    petList.map((pet, i) => {
                        return(
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}/`}>Details</Link>
                                    |
                                    <Link to={`/pets/${pet._id}/edit/`}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}

export default DisplayComponent