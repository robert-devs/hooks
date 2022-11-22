import React, { useEffect, useLayoutEffect } from 'react'

function LayoutEffect(){
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    },[])

    useEffect(()=>{
        console.log("useEffect")
    },[])
  return (
    <div>LayoutEffect</div>
  )
}

export default LayoutEffect

// used when u want show something before the page rerender ie b4 useEffect is called