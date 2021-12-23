import './App.css';

// Importamos los siguientes hooks
import { BrowserRouter } from 'react-router-dom'

// Importamos los componentes que va utilizar la app
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      {/* BrowserRouter contiene todo aquello que puede cambiar */}
      <BrowserRouter>
      {/* Utilizamos loc componentes importados anteriormente, poner por orden lógico */}
      <Header/>
      <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
