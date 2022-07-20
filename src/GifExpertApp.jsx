import { useState } from "react"
import { Addcategory } from "./components/Addcategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Marvel','Looney Tunes']);
    
    const onAddCategory = () => {
        setCategories(['Disney',...categories])
    }

  return (
    <>
        <div>GifExpertApp</div>

        <Addcategory />

        <button onClick = { onAddCategory}>Agregar</button>
        <ol>
        {   
            categories.map( category => {
                return <li key={category}>{category}</li>
                }
            )
        }
        </ol>

    </>




  )
}
