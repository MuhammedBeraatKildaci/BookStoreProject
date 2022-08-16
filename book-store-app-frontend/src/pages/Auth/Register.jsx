import { Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import "../../styles/authLayout.css"

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className='auth'>
      <Helmet>
        <title>REGISTER</title>
      </Helmet>
      <Container>
          <form>
            <div className='auth-form'>
              <Typography variant='h4' fontFamily={'Roboto'}>REGISTER FORM</Typography>
              <div>
                <TextField className='auth-form-text' variant="filled" label="First Name" name='firstName'  />
              </div>
              <div>
                <TextField className='auth-form-text' variant="filled" label="Last Name" name='lastName'  />
              </div>
              <div>
                <TextField className='auth-form-text' variant="filled" label="User Name" name='userName' />
              </div>
              <div>
                <TextField size="md" className='auth-form-text' variant="filled" label="Password" name='password' type="password" />
              </div>
              <div className="form-footer">
                <div>
                  <Button className="btn-auth" variant="contained">Save</Button>
                </div>
                <div>
                  <Button onClick={()=>navigate('/auth/login')} className="btn-auth" variant="outlined">LOGIN</Button>
                </div>
              </div>
            </div>
          </form>
      </Container>
    </div>
  )
}

export default Register