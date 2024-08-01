import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe('Pruebas AddCategory', () => {
    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />)//Se crea el sujeto de pruebas
        const input = screen.getByRole('textbox');//Extraemos el input

        fireEvent.input(input, { target: { value: 'saitama' } }); //Disparamos el evento
        expect(input.value).toBe('saitama') //Hacemos la asercion(afirmacion) de lo que estamos esperando  que suceda despues del evento
        // screen.debug();
    });

    //Simular un submit del formulario
    test('Debe llamar el onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();//Esto es un mock, significa que es una simulacion de la funcion

        render(<AddCategory onNewCategory={onNewCategory} />)//Se crea el sujeto de pruebas

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form') //Para que la pruba pase de debe establecer un arial-label en el form buscado
        // const form = screen.getAllByLabelText('formulario de busqueda') //Otro metodo

        fireEvent.input(input, { target: { value: inputValue } }); //Disparamos el evento
        fireEvent.submit(form); //Disparamos el evento
        expect(input.value).toBe('')
        // screen.debug()

        expect(onNewCategory).toHaveBeenCalled() //Evalua si la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1) //Evalua si la funcion fue llamada solo 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) //Evalua si la funcion fue llamada con el valor esperado en este caso (inputValue = saitama)
    })

    test('No debe llamar el onNewCategory si el input está vació', () => {

        const onNewCategory = jest.fn();//Esto es un mock, significa que es una simulacion de la funcion
        render(<AddCategory onNewCategory={onNewCategory} />)//Se crea el sujeto de pruebas

        const form = screen.getByRole('form') //Para que la pruba pase de debe establecer un arial-label en el form buscado
        fireEvent.submit(form); //Disparamos el evento

        expect(onNewCategory).toHaveBeenCalledTimes(0) //Evalua si la funcion fue llamada solo 1 vez

    });
});