import { Button, Container, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import "../../styles/authLayout.css"
import { logIn } from '../../store/AuthSlice'
import { login } from '../../services/AuthService'
import { Helmet } from 'react-helmet'

const Login = () => {
  const navigate = useNavigate()
  const authDispatch = useDispatch()
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      authDispatch(logIn(values));
      login(values).then((resp) => {
        if (resp !== 401) {
          console.log(resp);
          const user = JSON.stringify(resp);
          localStorage.setItem("user", user);
          navigate("/admin/books")
        } else {
          console.log("hatali giriş");
        }
      });
    },
  });


  return (

    <div className='auth'>
      <Helmet>
        <title>LOGIN</title>
      </Helmet>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className='auth-form'>
            <Typography variant='h4' fontFamily={'Roboto'}>LOGIN FORM</Typography>
            <div>
              <TextField onChange={handleChange} value={values.userName} className='auth-form-text'
                variant="filled" label="User Name" name="userName"
              />
            </div>
            <div>
              <TextField onChange={handleChange} value={values.password} className='auth-form-text'
                variant="filled" label="Password" name="password" type="password"
              />
            </div>
            <div className="form-footer">
              <div>
                <Button className="btn-auth" variant="contained" type='submit'>LOGIN</Button>
              </div>
              <div>
                <Button onClick={() => navigate('/auth/register')} className="btn-auth" variant="outlined">REGISTER</Button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Login