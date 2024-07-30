//Aqui creamos un input y emitimos un valor cuando el usuario da enter


import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("")

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    if(inputValue.trim().length <= 1)return;
      // setCategories(ActCategories => [inputValue, ...ActCategories])
      //El ActCategories copia lo que esta en el setCategories actualmente esto debido al hook, por eso no se pasa por los props
      onNewCategory(inputValue.trim())
      //El valor de inputValue se envia a onNewCategory definida en el padre para ejecutar la funcion onAddCategory
      setInputValue('')
    
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
