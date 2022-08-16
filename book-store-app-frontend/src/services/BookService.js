import axios from "axios"
import { tokenConfig } from "./TokenConfig"

const getOneBook = async(id)=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/books/${id}`)
    const data = await response.json()
    return data
}

const getAllBook = async ()=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`)
    const data = await response.data.data
    return data
}

const postOneBook =async (book)=>{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/books`,book,tokenConfig)
    const data = await response.json()
    return data
}

const putOneBook = async(id,book)=>{
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/books/${id}`,book,tokenConfig)
    const data = await response.json()
    return data
}

const deleteOneBook =async (id)=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/books/${id}`,tokenConfig)
    const data = await response.json()
    return data
}


export {
    getOneBook,
    getAllBook,
    postOneBook,
    putOneBook,
    deleteOneBook
}