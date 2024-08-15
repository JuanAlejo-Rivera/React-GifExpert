import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Prueba en el hook de useFecthGifs', () => { 

    test('Debe de regresa el estado inicial', () => { 
        //Estado inicial del hook
        //Que las imagenes sean un arreglo vacio y isLoadin este en true

        const {result} = renderHook( () =>useFetchGifs() );
        const{images,isLoading} = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });


    test('Debe de retornar un arreglo de imagenes y el isLoadin en false', async() => { 
        //Estado inicial del hook
        //Que las imagenes sean un arreglo vacio y isLoadin este en true

        const {result} = renderHook ( () =>useFetchGifs('one punch') );
        // console.log(result)
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
            
        );
        const{images,isLoading} = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     });


 });