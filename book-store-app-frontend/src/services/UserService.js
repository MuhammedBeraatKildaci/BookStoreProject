import axios from "axios"
import { tokenConfig } from "./TokenConfig"

const getAllUser = async()=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
    const data = await response.data.data
    return data
}

const postOneUser = async(User)=>{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`,User,tokenConfig)
    const data = await response.data.data
    return data
}


export {
    getAllUser,
    postOneUser,
}