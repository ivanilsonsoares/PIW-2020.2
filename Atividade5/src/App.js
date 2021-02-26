import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaComentario } from './components/pages/PaginaComentario/paginaComentario';
import './components/commom/Navegador/Navegador.css'
import {Router , Route } from 'react-router-dom';
import history from './history';
function App() {
  return ( 
    <Router history={history}>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route exact path="/comentario">
        <PaginaComentario></PaginaComentario>
      </Route>
      
    </Router>
    
  )
}

export default App;
