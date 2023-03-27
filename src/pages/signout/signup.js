import classes from './signup.module.css'
import { useState, useContext } from 'react';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <div className={classes.main}>

        <div className={classes.form}>
          <h1>SignUp</h1>
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

export default SignUp;