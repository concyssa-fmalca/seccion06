import { useState } from "react"

export const Addcategory = () => {
    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = (event) =>{
        setInputValue(event.target.value);    
    }

    const onSubmit = (event) => {
        event.preventDefault();                
    }

    
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar GIF"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
