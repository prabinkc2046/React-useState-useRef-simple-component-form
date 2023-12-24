import React, { useState, useRef } from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const nameRef = useRef()
    const ageRef = useRef() 
    
    function handleSubmitForm(e){
        e.preventDefault()
          
        const enterName = nameRef.current.value
        setName(enterName)
        const enterAge = ageRef.current.value
        setAge(enterAge)
        
        if (enterName.trim() !== '' && enterAge.trim() !== ''){
            setSubmitted(true)
            nameRef.current.value = null
            ageRef.current.value = null
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <label>
                name:
                <input  ref={nameRef}  type='text' required/>
            </label>

            <label>
                age:
                <input  ref={ageRef}  type='number' required/>
            </label>
            <br/>

            <input  type='submit'/>
        </form> 
        {submitted && (
            <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
        )}
        
    </div>
  )
    
}
