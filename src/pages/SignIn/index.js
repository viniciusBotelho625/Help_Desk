import './style.css';
import logo from '../../assets/logo.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    async function handleSignIn(e) {
        e.preventDefault();

        await signIn(email, password);
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="Logo de sistema de chamados"/>
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>

                    <input 
                        type="text" 
                        placeholder='email@email.com' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    />

                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required={true}
                    />
                    
                    <button type="submit">
                        {loadingAuth ? 'Carregando...' : 'Acessar'}
                    </button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}