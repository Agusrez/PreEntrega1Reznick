import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  const greeting = 'Hola'
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div>
        <ItemListContainer greeting={greeting} />
      </div>
    </div>
  );
}

export default App;
