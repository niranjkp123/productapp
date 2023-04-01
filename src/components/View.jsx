import { Button, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[update,setUpdate]= useState(false)
    var[selected,setSelected] = useState([])
    var[Students,setStudents]= useState([])
    useEffect(()=>{
        axios.get("  http://localhost:3001/products")
        .then(response=>{
            setProduct(product=response.data)
        console.log(Students)
        })
        .catch(error=>console.log(error))
        
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete(" http://localhost:3001/products/"+id)
        .then(response=>{
            alert("succesfully delete")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    const updateValue=(value)=>{
        setSelected(value)
        setUpdate(true)
    }
    var finalJSX=<TableContainer>
    <Table>
        <TableHead>
            <TableRow><br></br><br />
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>brand</TableCell>
                <TableCell>delete</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
            Students.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                    <TableCell><Button onClick={()=>updateValue(value)}>update</Button></TableCell>
                </TableRow>
            })
            }
        </TableBody>
    </Table>
   </TableContainer>

   if(update)
   finalJSX = <Add data={selected} method="put" />
  return (
    finalJSX
   
  )
}
export default View

