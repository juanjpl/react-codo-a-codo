

import React, { useRef, useState } from 'react'
import { StyledButton, StyledError, StyledForm, StyledInput } from '../styles/FormStyles'
import { useForm } from '../hooks/useForm'


export const Form = () => {

  const errorNameRef = useRef()
  const errorEmailRef = useRef()
  const errorAgeRef = useRef()
  
  
  const refs =[errorNameRef , errorAgeRef , errorEmailRef]
  
 
  const {form, submitHandleClick,inputHandleChange} = useForm(refs);
  
  return (
    <StyledForm>
      <StyledInput name='name' type='' value={form.name} onChange={inputHandleChange} placeholder='Ingrese nombre'/>
      <StyledError ref={errorNameRef } id='name'>
      </StyledError>

      <StyledInput name='email' type='email' value={form.email} onChange={inputHandleChange} placeholder='Ingrese email'/>
      <StyledError ref={errorEmailRef } id='email'>
      </StyledError>

      <StyledInput name='age' type='number' value={form.age} onChange={inputHandleChange} placeholder='Ingrese edad'/>
      <StyledError ref={errorAgeRef } id='age'>
      </StyledError>

      <StyledButton onClick={submitHandleClick}>Enviar</StyledButton>
    </StyledForm>  )
}
