import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Effect = () => {
    const[data,setData]= useState("")

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
           setData(response.data[0].email)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
        <h1>hello world{data}</h1>
    </div>
  )
}

export default Effect