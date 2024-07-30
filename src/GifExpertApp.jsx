// Aqui ordeno toda la informacion traida desde los deferentes elementos para ser mostradas en el doom

import { useState } from "react"
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Sukuna'])

  const onAddCategory = (newCategory) => {

    // if(newCategory.includes(newCategory))return;

    // Convertir newCategory a minúsculas
    const lowerCategory = newCategory.toLowerCase();
    // Verificar si la categoría ya existe en minúsculas
    const categoryExists = categories.some(category => category.toLowerCase() === lowerCategory);
    if (categoryExists) return; // Si la categoría existe, salir de la función sin hacer cambios
    
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
       onNewCategory={onAddCategory}
      // ON, esta emitiendo algo, onNewCategory es el prop que almacena a onAddCategory 
      />

      {/* Abajo retornamos los gifs de la api desde gifGrid */}
        {
            categories.map((category) => (
            <GifGrid 
                key={category} 
                categoryP={category}/>
          ))
        }
      

    </>
  )
}


