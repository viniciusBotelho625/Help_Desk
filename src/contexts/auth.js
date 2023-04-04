import { useEffect, useState, createContext } from 'react';
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export const AuthContext = createContext({});


function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate(); 

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem("@tickets");

            if(storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }

            setLoading(false)
        }

        loadUser();
    }, [])

    async function signIn(email, password) {
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
        .then(async (resp) => {
            let uid = resp.user.uid;

            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            let data = {
                uid: uid,
                name: docSnap.data().name,
                email: resp.user.email,
                avatarUrl: docSnap.data().avatarUrl 
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success(`Bem vindo(a) de volta, ${data.name}`)
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false)
            toast.error("Acesso inválido")
        })

    }

    async function registerNewUser(email, password, name) {
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async(resp) => {
            let uid = resp.user.uid

            await setDoc(doc(db, "users", uid), {
                name: name,
                avatarUrl: null
            })
            .then(() => {
                let data = {
                   uid: uid,
                   name: name,
                   email: resp.user.email,
                   avatarUrl: null 
                };

                setUser(data);
                storageUser(data)
                setLoadingAuth(false);
                toast.success('Seja bem vindo ao sistema!')
                navigate('/dashboard')
            })
        })
        .catch((error) => {
            console.log(error);
            setLoadingAuth(false)
        })
    }

    function storageUser(data) {
        localStorage.setItem('@tickets', JSON.stringify(data))
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem("@tickets")
        setUser(null);
    }

    return(
        <AuthContext.Provider 
            value={{
                isLogged: !!user,
                user,
                signIn,
                logout,
                registerNewUser,
                loadingAuth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    ) 
}

export default AuthProvider;