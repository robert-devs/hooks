import React, { useState } from 'react'

const State = () => {
  // const[counter,setCounter] = useState(0)
  const [inputValue, setInputValue] = useState('pedro')

  let onChange = (event)=>{
    
    const newValue = event.target.value;
    setInputValue(newValue)
  }

  return (
    <div>
      <input type="text" placeholder=" entaer something" onChange={onChange} />
      {inputValue}
    </div>
  )
}

export default State
