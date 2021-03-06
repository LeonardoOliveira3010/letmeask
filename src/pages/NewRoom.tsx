// Importação React
import { useContext } from 'react'

import { Link } from 'react-router-dom'

// Componente/função
import { AuthContext } from '../App'

import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'

import '../styles/auth.css'

export function NewRoom (){
    const { user } = useContext(AuthContext)

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
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova Sala</h2>

                    <form action="">
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type='submit'>Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}

