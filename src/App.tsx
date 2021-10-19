// Importação do React
import { createContext, useState } from 'react';

// Importação firebase
import {auth, firebase} from './services/firebase'


// Instalando o react-router-dom com typescript: npom i @types/react-router-dom -d
import {BrowserRouter, Route} from 'react-router-dom'

// Componentes criados
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

// Criando o tipo do contexto para o TS
type User = {
  id: string;
  name: string;
  avatar: string
}

type AuthContextType ={
  user: User | undefined;
  singInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

function App() {
  const [user, setUser] = useState<User>()

  // Função de autenticação com o Google
  async function singInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)
    
    if(result.user){
      // Pegando algumas informações do usuario
      const {displayName, photoURL, uid} = result.user

      // Caso não tenha determinada informação, lançar um erro
      if(!displayName || !photoURL){
        throw new Error('Não existe tal informação')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    // Englobando os componentes no BrowserRouter
    <BrowserRouter>
      <AuthContext.Provider value={{ user, singInWithGoogle }}>
        {/* Exact exibe somente com a rota definida */}
        <Route path="/" exact={true} component={ Home } /> 
        <Route path="/room/new" component={ NewRoom } />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
