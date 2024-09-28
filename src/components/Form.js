import React from "react"
import { useState } from "react"

const Form = ({handleFormSubmit}) => {

  const [formState, setFormState] = useState({})

  const handleOnChange = (e) => {
    setFormState({...formState, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleFormSubmit(formState)
  }

  return(
    <form onChange={handleOnChange}>
      <div className="form-section form-title">
        <h1>Iniciar Sesion</h1>
      </div>
      <div className="form-section">
        <label>Corrreo</label>
        <input type="email" name="email"/>
      </div>
      <div className="form-section">
        <label>Contrasena</label>
        <input type="password" name="password"/>
      </div>
      <div className="form-section form-submit">
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </div>
    </form>
  )
}

export default Form