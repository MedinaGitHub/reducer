import React from 'react'
import "@testing-library/jest-dom";
import {render, fireEvent} from '@testing-library/react'
import {prettyDOM} from '@testing-library/dom'
import  TodoList from "./index";

const setup = () => {
    const component = render(<TodoList />)
    const input = component.getByPlaceholderText('add todo...')
    return {
      input,
      component,
    }
  }

it('add todo in the todo list', () => {
    const {input, component} = setup()
    fireEvent.change(input, {target: {value: 'Wake up'}});
    fireEvent.keyUp(input, { key: 'Enter', keyCode: 13 });
    //console.log(prettyDOM(component.container));
    expect(component.getByText('Wake up')).toBeInTheDocument()
})

//Todo testear el eliminar y el checkbox