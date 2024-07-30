//Aqui ejecuto la api de los gif y le agrego la category, llamo la funcion desde getGifs.js

import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categoryP }) => {
//Custom hook
    const {isLoading, images} = useFetchGifs(categoryP);


    return (
        <>
            <h3>{categoryP}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            {/* Creamos lista ordenada */}
            <div className="card-grid">
                {/* Mapeamos las imagenes, entre {} por que es la sintaxis de js en jsx la funcion inia con () por el retorno implicito*/}
                {images.map((image) =>(
                    <GifItem 
                    key={image.id}
                        {...image}
                    />
                ))}

            </div>
        </>
    )
}
