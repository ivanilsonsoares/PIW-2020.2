import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaComentario } from './components/pages/PaginaComentario/paginaComentario';
import './components/commom/Navegador/Navegador.css'
import { Router, Route, Redirect } from 'react-router-dom';
import history from './history';
import { Cadastro } from './components/pages/Cadastro/Cadastro';
import { Login } from './components/pages/Login/Login';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({ token: null, nome: null});

  return (
    <AuthContext.Provider value={{ token: auth, setAuth: setAuth }}>
      <Router history={history}>
        <Route exact path="/">
          {
            auth.token == null ?
              <Redirect to="/login"></Redirect> :
              <PaginaPrincipal></PaginaPrincipal>
          }

        </Route>
        <Route exact path="/comentario">
          <PaginaComentario></PaginaComentario>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro></Cadastro>
        </Route>
        <Route exact path="/login" component={Login}>
        </Route>
      </Router>
    </AuthContext.Provider>

  )
}

export default App;
