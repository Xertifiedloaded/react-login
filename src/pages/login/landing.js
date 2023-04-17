import { useState, useContext } from 'react';
import classes from './landing.module.css'
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const Landing = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate('/account')
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <>

      <div className={classes.main}>

        <div className={classes.form}>
          <h1>Login To your account</h1>
          <div className={classes.signup}>Don't have account 

            <Link>
              signup here
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={classes.input}>
              <input type="text" placeholder='enter Email' value={email} onChange={handleEmail} />
            </div>
            <div className={classes.input}>
              <input type="text" placeholder='password' value={password} onChange={handlePassword} />
            </div>
            <button type='submit' >
              login
            </button>
  
          </form>
        </div>
      </div>
    </>
  )
}

export default Landing;