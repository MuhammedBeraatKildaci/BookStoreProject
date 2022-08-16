import React from 'react'
import "../styles/notFound.css"
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material'

const PageNotFound = () => {

  const navigate = useNavigate()

  const navigateRoute =()=>{
    navigate('/user/home')
  }

  return (
    <div className='not-found'>
      <div className='not-found-message'>
        <span className="color-red">UPPPSSSS!!!!</span>
        <span>PAGE NOT FOUND</span>
        <span>404</span>
        <Button color='error' variant="outlined" onClick={navigateRoute}>RETURN HOME PAGE</Button>
      </div>
    </div>
  )
}

export default PageNotFound