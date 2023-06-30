import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import { FiSettings } from 'react-icons/fi'

export default function Profile() {
    return (
        <div>
            <SideBar />

            <div className='content'>
                <Title name="Minha conta">
                    <FiSettings size={25} />
                </Title>
            </div>
        </div>
    )
}