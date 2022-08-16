import axios from "axios"
import { tokenConfig } from "./TokenConfig"

const getOneAuthor = async (id)=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/authors/${id}`)
    const data = await response.data.data
    return data
}

const getAllAuthor = async ()=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/authors`)
    const data = await response.data.data
    return data;
}

const postOneAuthor =async(author)=>{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/authors`,author,tokenConfig)
    const data = await response.data.data
    return data
}

const putOneAuthor = async(id,author)=>{
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/authors/${id}`,author,tokenConfig)
    const data = await response.data.data
    return data
}

const deleteOneAuthor = async(id)=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/authors/${id}`,tokenConfig)
    const data = await response.data.data
    return data
}


export {
    getOneAuthor,
    getAllAuthor,
    postOneAuthor,
    putOneAuthor,
    deleteOneAuthor
}