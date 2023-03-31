import './style.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="Logo de sistema de chamados"/>
                </div>

                <form>
                    <h1>Entrar</h1>

                    <input 
                        type="text" 
                        placeholder='email@email.com' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    
                    <button type="submit" >Acessar</button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}