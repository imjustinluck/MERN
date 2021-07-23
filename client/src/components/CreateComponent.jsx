import React, {useState} from "react"
import {navigate, Link} from "@reach/router"
import axios from "axios"
import FormComponent from "./FormComponent"

const CreateComponent = props => {
    const [errorState, setErrorState] = useState({})

    const createPet = pet => {
        axios.post("http://localhost:8000/api/pets", pet)
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
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Link to="/">back to home</Link>
            <h1>Know a pet needing a home?</h1>
            <FormComponent start={{
                "name":'',
                "type":'',
                "description":'',
                "skill1":'',
                "skill2":'',
                "skill3":''
            }} callback={createPet} errorState={errorState}/>
        </div>
    )
}

export default CreateComponent