import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';


export default function Dashboard() {
    const { logout } = useContext(AuthContext)

    async function handleLogout() {
        await logout();
    }

    return(
        <div>
            <h1>Página Dashboard</h1>

            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}