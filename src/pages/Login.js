import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { userAuth } from '../services/LoginService'
import Form from '../components/Form'

const Login = () => {
  const navigate = useNavigate()
  const [loginState, setLoginState] = useState({})

  const handleFormSubmit = (formData) => {
    const isAuth = userAuth(formData)
    if (isAuth) return navigate('/Home')
    setLoginState({...formData, authenticated: isAuth})
  }

  return(
    <div className="container">
      <Form handleFormSubmit={handleFormSubmit}/>
      <p className={loginState.authenticated === false ? 'active':'inactive'}>Correo y/o contrasena incorrectos.</p>
    </div>
  )
}

export default Login