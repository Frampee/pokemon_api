import './App.css';

// Importamos los componentes que va utilizar la app
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      {/* Utilizamos loc componentes importados anteriormente, poner por orden lógico */}
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
