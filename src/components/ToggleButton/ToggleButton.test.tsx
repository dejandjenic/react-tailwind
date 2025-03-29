import React from 'react';
import { render, screen } from '@testing-library/react';
import ToggleButton from './ToggleButton';
import { JsxElement } from 'typescript';

describe('renders toogle button', () => {

  test("is open",()=>{
    render(<ToggleButton open={true} setOpen={()=>{}} />);
    const element = screen.getByTestId("minus")
    expect(element).toBeInTheDocument();
  })

  test("is closed",()=>{
    render(<ToggleButton open={false} setOpen={()=>{}} />);
    const element = screen.getByTestId("plus")
    expect(element).toBeInTheDocument();
  })

  test("toggle button click",()=>{
    const setIsOpen = jest.fn()
    render(<ToggleButton open={false} setOpen={setIsOpen} />);
    const element = screen.getByTestId("toggle")
    element.click()
    expect(setIsOpen).toHaveBeenCalledTimes(1)
  })
  
});
