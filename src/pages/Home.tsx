// Importação React
import { useContext } from 'react'

// Importação Componentes/funções
import { useHistory } from 'react-router'
import { Button } from '../components/Button'
import { AuthContext } from '../App'

// import {auth, firebase} from '../services/firebase'
// import { GoogleAuthProvider } from "firebase/auth";

import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

// Importação Estilo
import '../styles/auth.css'

export function Home (){
    // Hooks
    const history = useHistory()
    const {user, singInWithGoogle} = useContext(AuthContext)
    
    async function handleCreateRoom () {
        if(!user){
            await singInWithGoogle()
        }
        history.push('/room/new')
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao-vivo</strong>
                <p>Tire as suas dúvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="seperator">ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type='submit'>Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}

