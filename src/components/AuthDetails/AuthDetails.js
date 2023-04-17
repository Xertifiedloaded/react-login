import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import classes from './AuthDetails.module.css'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const AuthDetails = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser(null)
            }
        }, []);
        return () => {
            listen()
        }
    })
    const UserSignOut = () => {
        signOut(auth).then(() => {
            console.log("sign out successful")
            navigate('/login')
        }).catch((error => console.log(error)))
    }
    return (
        <>
            <div className={classes.main}>
                {
                    user ?
                        <div>
                            {`welcome ${user.email}`}
                            <p>hi</p>
                        </div> : <p>logged out</p>
                }
            </div>
            <button onClick={UserSignOut}>
                signout
            </button>
        </>
    )
}

export default AuthDetails;