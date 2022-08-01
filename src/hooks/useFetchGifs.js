import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {    
    const [gifs, setGifs] = useState([])
    const getImages = async () => {
        const newImages = await getGifs(category);
        setGifs(newImages)
    }

    useEffect(() => {
        getImages();
    }, [])


return {
    images: gifs,
    isLoading: true
}
}
