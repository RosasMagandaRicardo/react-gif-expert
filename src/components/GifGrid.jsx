import { GifItem } from "./GifItem"
import { useFetchGif } from "../hooks/useFetchGif"
import { useEffect } from "react"

export const GifGrid = ({category}) => {

  const { images, isLoading} = useFetchGif (category)

  useEffect(() => {
  }, [images.length])
  
    
  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
        {console.log("images",images)}
        {
          images.map((image)=> (
            <GifItem key={image.id} {...image}/>
          ))
        }
      </div>
    </>
  )
}