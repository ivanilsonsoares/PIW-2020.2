import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaComentario } from './components/pages/PaginaComentario/paginaComentario';
import './components/commom/Navegador/Navegador.css'
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route exact path="/comentario">
        <PaginaComentario></PaginaComentario>
      </Route>
      
    </BrowserRouter>
    
  )
}

export default App;
