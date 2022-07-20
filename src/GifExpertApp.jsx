import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Marvel','Looney Tunes']);
    
    const onAddCategory = (value) => {
        setCategories([value,...categories])
    }

  return (
    <>
        <div>GifExpertApp</div>

        <AddCategory setCategories = {setCategories} />
        
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
