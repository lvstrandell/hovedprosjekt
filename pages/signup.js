import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import firebaseInstance from '../config/firebase';
import { LoginForm } from '../components/LoginForm/loginform';


const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    router.push('/login');

    try {
      await firebaseInstance.auth().createUserWithEmailAndPassword(email, password);
      console.log('Användare skapad!')
    } catch(error) {
      setError(error.message)
      console.log(error)
    }
  };

  return (
    <section>
      <LoginForm onSubmit={handleSubmit}>
        <label htmlFor='email'>E-mail</label>
        <input 
          type='text'
          name='email'
          placeholder='Email@email.com'
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input 
          type='password'
          name='password'
          placeholder='****'
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>Register</button>
        <Link href='/login'>Already have an account? Log in</Link>
      </LoginForm>
    </section>
  )
};

export default SignUp;