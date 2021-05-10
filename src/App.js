import Navbar, { NavbarFunctional } from './components/Navbar';
import Booklist, { BooklistFunctional } from './components/Booklist';
import ThemeToggler, { ThemeTogglerFunctional } from './components/ThemeToggler';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavbarFunctional />
          <BooklistFunctional />
          <ThemeTogglerFunctional />  
        </AuthContextProvider> 
      </ThemeContextProvider>
    </div>
  );
}

export default App;
