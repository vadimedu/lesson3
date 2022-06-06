import { render, screen } from '@testing-library/react';
import { Form } from './Form';
const sd = "sd";
const onchange = jest.fn();

describe ('Form component', () =>{
  test('check func', () => {
    render(<Form value={'hi again'}/>);
    expect(Form).toBeInstanceOf(Function);
  });
  
  test('check submit', () => {
    render(<Form >text</Form>);
    expect(screen.getByText('submit')).toBeInTheDocument();
  });
  
  test('check button', () => {
    render(<Form >text</Form>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
}) 


