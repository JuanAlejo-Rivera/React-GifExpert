import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (categoryP) => {
    // //Estado local para guardar las imagenes actuales images

  const [images, setImages] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const getImages = async () => {
    //Creamos una nueva variable que contiene las nuevas imagenes llamadas por getGifs
    const newImages = await getGifs(categoryP)
    //Asignamos las nuevas imagenes al SET
    setImages(newImages)
    setisLoading(false)
  }


  //Este useEffect evita que la nueva categoria creada en el gifexpert duplique los gifs llamados de las api
  //Los useEfefect no pueden ser async
  useEffect(() => {
    getImages()
  }, [])

  return {
    images,
    isLoading

  }
}

