import axios from "axios"
import { tokenConfig } from "./TokenConfig"

const getOneCategory = async(id)=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories/${id}`)
    const data = await response.data.data
    return data
}

const getAllCategory = async()=>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`)
    const data = await response.data.data
    return data
}

const postOneCategory = async(category)=>{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/categories`,category,tokenConfig)
    const data = await response.data.data
    return data
}

const putOneCategory = async(id,category)=>{
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/categories/${id}`,category,tokenConfig)
    const data = await response.data.data
    return data
}

const deleteOneCategory = async(id)=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/categories/${id}`,tokenConfig)
    const data = await response.data.data
    return data
}


export {
    getOneCategory,
    getAllCategory,
    postOneCategory,
    putOneCategory,
    deleteOneCategory
}