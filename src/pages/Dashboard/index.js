import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import SideBar from '../../components/SideBar';

export default function Dashboard() {
    const { logout } = useContext(AuthContext)

    async function handleLogout() {
        await logout();
    }

    return(
        <div>
            <SideBar />
            <h1>Página Dashboard</h1>

            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}