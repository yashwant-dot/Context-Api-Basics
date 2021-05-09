import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggler />  
        </AuthContextProvider> 
      </ThemeContextProvider>
    </div>
  );
}

export default App;
