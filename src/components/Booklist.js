import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const BooklistFunctional = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  
  return(
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        <li style={{background: theme.ui}}>the way of kings</li>
        <li style={{background: theme.ui}}>the name of the wind</li>
        <li style={{background: theme.ui}}>the final empire</li>
      </ul>
    </div>
  );
}

export default class Booklist extends Component {
  // Two ways of using context

  // First --- Using static contextType property. This approach can only be used in class based component.
  // And we cannot consume multiple context with this approach. ****

  // static contextType = ThemeContext;
  // render() {
  //   const { isLightTheme, light, dark } = this.context;
  //   const theme = isLightTheme ? light : dark;

  //   return (
  //     <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
  //       <ul>
  //         <li style={{background: theme.ui}}>the way of kings</li>
  //         <li style={{background: theme.ui}}>the name of the wind</li>
  //         <li style={{background: theme.ui}}>the final empire</li>
  //       </ul>
  //     </div>
  //   )
  // }

  // Second --- Using Context Consumer. This approach can also work with functional component.
  // And using this approach we can consume multiple Context. ****

  render() {
    return(
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark

          return(
            <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
              <ul>
                <li style={{background: theme.ui}}>the way of kings</li>
                <li style={{background: theme.ui}}>the name of the wind</li>
                <li style={{background: theme.ui}}>the final empire</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
