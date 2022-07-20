import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Marvel','Looney Tunes']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
    }

  return (
    <>
        <div>GifExpertApp</div>

        <AddCategory onNewCategory={ onAddCategory}  />        

        {   
            categories.map( category => {
                return <GifGrid category={category} />
                }
            )
        }


    </>




  )
}
