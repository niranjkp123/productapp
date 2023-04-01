import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
const Add = (props) => {

    var[input,setInput]=useState(props.data)
    console.log(props.data)



    const inputHandler =(e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }
    const readValues = ()=>{
        console.log("clicked")
        if(props.method==="post"){
        axios.post("http://localhost:3001/products",input)
        .then(response=>{
            alert("succefully added")
        })
        .catch(error=>console.log(error))
    }else if(props.method==="put"){
      axios.put("http://localhost:3001/products/"+input.id,input)
      .then(response=>{
        alert("updated succefully")
        window.location.reload(false)
      })
      .catch(err=>console.log(err))
    }
  }
  return (
    <div>
        <br></br><br /><br />
        <br></br>
      <TextField label='name' value={input.name} name='name'
      onChange={inputHandler} />
      <TextField label='grade'name='grade' value={input.grade}
      onChange={inputHandler} />
      <Button variant='contained'onClick={readValues}color='success'>submit</Button>
      <br>
    </br>

    </div>
  )
}

export default Add
