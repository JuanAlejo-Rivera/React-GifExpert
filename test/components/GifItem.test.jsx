import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";

describe('Prueba gifItem', () => {

  const title = 'sukuna'
  const url = 'https://sukuna.jpg'

  test('Debo hacer un snapchot', () => {

    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot();

  });

  test('Debe mostrar la imagen con el url y el alt indicado', () => {

    render(<GifItem title={title} url={url} />);
    //muestra una foto del codigo sirve para recordar que estoy evaluando
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(src)
    expect(alt).toBe(alt)
  })

  test('Debe de mostar el titulo en el componente', () => { 
    
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy()

   })

});