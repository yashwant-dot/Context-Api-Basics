import React, { Component, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

export const NavbarFunctional = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return(
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        { isAuthenticated ? 'Logged In' : 'Logged Out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default class Navbar extends Component {

  // Using the context. Only class component can access this way.
  // static contextType = ThemeContext;
  // render() {
  //   const { isLightTheme, light, dark } = this.context;
  //   const theme = isLightTheme ? light : dark;

  //   return (
  //     <nav style={{ background: theme.ui, color: theme.syntax }}>
  //       <h1>Context App</h1>
  //       <ul>
  //         <li>Home</li>
  //         <li>About</li>
  //         <li>Contact</li>
  //       </ul>
  //     </nav>
  //   )
  // }

  render() {
    return(
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;

              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    { isAuthenticated ? 'Logged In' : 'Logged Out' }
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
