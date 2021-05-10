import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeTogglerFunctional = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle the theme</button>
}

export default class ThemeToggler extends Component {

  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button onClick={toggleTheme}>Toggle the theme</button>
    )
  }
}
