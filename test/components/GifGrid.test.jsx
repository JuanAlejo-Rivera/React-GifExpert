import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Creamos una simulacion del fetch que busca los gif
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GitGrid', () => { 

    const category = 'one punch'

    test('Debe de mostrar el loading inicialmente', () => { 

        //Se establecen datos simulados para evitar errores ya que el mock los requiere
        useFetchGifs.mockReturnValue({
            //Debe ser true ya que estamos analizando si estan cargando las imagenes
            isLoading:true,
            images:[]
        })
        
        render (<GifGrid categoryP = {category}/>)
        expect(screen.getByText('Cargando...') );
        expect(screen.getByText(category) );
     });

     //probamos el fecth de buscar gifs
     test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        //Cargamos datos simulados para probar el proceso
        const gifs = [
            {
                id:'123',
                title:'sukuna',
                url:'http://local/sukuna.jpg'
            },
            {
                id:'1234',
                title:'goku',
                url:'http://local/goku.jpg' 
            }
        ]
        //Cargamos las imagenes en el arreglo y simulamos carga completa
        useFetchGifs.mockReturnValue({
            isLoading:false,
            images:gifs
        })
        //invocamos todo el GifGrid y
        render (<GifGrid categoryP = {category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)

      });

      
 });
 
  //Renderizamos el componente
//Debemos tener claro que cosa vamos a evaluar 
  //Le atribuimos datos simulados
  //Podemos probar con el screen que todo se este cargado
  //Evaluamos los datos esperados 