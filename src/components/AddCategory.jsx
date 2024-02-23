import {useState} from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        //console.log(inputValue)
        if(inputValue.trim().length<=1) return;
        //setCategories((categorias) => [inputValue,...categorias])
        onAddCategory(inputValue.trim())
        setinputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
    )
}
