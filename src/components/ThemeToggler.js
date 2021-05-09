import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class ThemeToggler extends Component {

  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button onClick={toggleTheme}>Toggle the theme</button>
    )
  }
}
