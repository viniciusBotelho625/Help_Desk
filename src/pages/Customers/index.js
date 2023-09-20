import { useState } from "react";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import { db } from '../../services/firebaseConnection'
import { addDoc, collection } from "firebase/firestore";

import { FiUser } from 'react-icons/fi'
import { toast } from "react-toastify";

export default function Customers() {

    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [adress, setAdress] = useState('')

    async function handleRegister(e){
        e.preventDefault()

        if(name !== '' && cnpj !== '' && adress !== '') {
            await addDoc(collection(db, "customers"), {
                nameFantasy: name,
                cnpj: cnpj,
                adress: adress
            })
            .then(() => {
                setAdress('')
                setCnpj('')
                setName('')
                toast.success("Cadastro realizado com sucesso!")
            })
            .catch((error) => {
                toast.error("Error ao fazer o cadastro")
            })
        } else {
            toast.error("Preencha todos os campos")
        }
    }

    return(
        <div>
            <SideBar/>

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Nome fantasia</label>
                        <input 
                            type="text" 
                            placeholder="Nome da empresa"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label>CNPJ</label>
                        <input 
                            type="text" 
                            placeholder="Digite o CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />

                        <label>Endereço</label>
                        <input 
                            type="text" 
                            placeholder="Digite o endereço da empresa"
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />

                        <button type="submit">Cadastrar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}