import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="Logo de sistema de chamados"/>
                </div>

                <form>
                    <h1>Cadastrar Conta</h1>

                    <input 
                        type="text" 
                        placeholder='Nome Completo' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                <Link to="/">Já possui uma conta? Faça login</Link>
            </div>
        </div>
    )
}