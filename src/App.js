import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggler from './components/ThemeToggler';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggler /> 
      </ThemeContextProvider>
    </div>
  );
}

export default App;
