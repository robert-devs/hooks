import React, { useRef } from 'react'

const Ref = () => {
    const  inputRef = useRef(null)

    const onClick =()=>{
        inputRef.current.value = ""
    }
  return (
    <div>

        <input type="text"  placeholder='example' ref={inputRef}/>
        <button onClick={onClick}>chage name</button>
    </div>
  )
}

export default Ref