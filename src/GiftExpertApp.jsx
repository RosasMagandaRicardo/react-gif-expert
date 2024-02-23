import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GiftExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (value) => {
    if(categories.find((category)=>category.toLowerCase()===value.toLowerCase())) return
    //if(categories.includes(value)) return
    setCategories([value,...categories])
  }

  return (
    <>
      <h1> GiftExpertApp </h1>
      <AddCategory onAddCategory={onAddCategory}/>
      
      {
        categories.length == 0 && <p>NO DATA FOUND</p>
      }
        {
          categories.map(categorias => (
            <GifGrid
              key={categorias}
              category={categorias}
            />
          ))
        }
    </>
  )
}

export default GiftExpertApp