import axios from "axios"

const login=async(user)=>{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,user)
    const data =await response.data
    return data;
}

const register = async(user)=>{
    const response =await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`,user)
    const data = await response.data
    return data
}

export{
    login,
    register
}