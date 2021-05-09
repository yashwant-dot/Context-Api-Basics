import React, { createContext, Component } from 'react'

// Creates the context and export.
export const ThemeContext = createContext(); 

// State is the data that will be shared down the component tree.
export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  }

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
