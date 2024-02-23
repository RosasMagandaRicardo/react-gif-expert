import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGif = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const setGifs = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setisLoading(false)
    }

    useEffect(() => {
        setGifs()
    }, [])

    return {
        images,
        isLoading
    }
}