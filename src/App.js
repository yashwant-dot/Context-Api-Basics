import Navbar, { NavbarFunctional } from './components/Navbar';
import Booklist, { BooklistFunctional } from './components/Booklist';
import ThemeToggler, { ThemeTogglerFunctional } from './components/ThemeToggler';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavbarFunctional />
          <BookContextProvider>
            <BooklistFunctional />
          </BookContextProvider>
          <ThemeTogglerFunctional />  
        </AuthContextProvider> 
      </ThemeContextProvider>
    </div>
  );
}

export default App;
