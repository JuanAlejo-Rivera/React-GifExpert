import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { AddCategory } from "../src/Components";

describe('Pruebas en GifExperdApp', () => {

    test('Probar que no se carguen categorias duplicadas', () => {

        const inputValue = "Naruto"
        const inputDuplicate = "Naruto"

        render(<GifExpertApp />)
        const input = screen.getByRole("textbox")
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        //Agregamos la categoria duplicada
        fireEvent.input(input, { target: { value: inputDuplicate } })
        fireEvent.submit(form)

        const Duplicateds = screen.queryAllByText(inputValue);
        expect(Duplicateds.length).toBe(1)

        // screen.debug()


    });

    test('Probar el rendereizado de la categoria inicial', () => {
        render(<GifExpertApp />)

        expect(screen.getByText('Sukuna')).toBeTruthy()
        // screen.debug();
    });


    test('Probar la limpieza del campo despues de enviar la categoria', () => {

        render(<GifExpertApp/>)

        const inputValue = 'Juan'

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target:{value:inputValue}})
        
        fireEvent.submit(form)
        // screen.debug()

        expect(input.value).toBe('')

    });

    test('Probar el comportamiento del input y el formulario', () => { 
        
        const onNewCategory = jest.fn();//Esto es un mock, significa que es una simulacion de la funcion
        render(<AddCategory onNewCategory ={onNewCategory}/>);

        const inputValue = "Naruto";

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target:{value:inputValue}})
        fireEvent.submit(form)
        screen.debug();

        expect(onNewCategory).toHaveBeenCalledWith(inputValue)//Evalua si la funcion fue llamada con el valor esperado en este caso (inputValue = Naruto)



     });

});