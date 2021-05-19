import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { object, string } from 'yup';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router';
import { useAuth } from '../config/auth';
import { LoginForm } from '../components/LoginForm/loginform';

const schema = object().shape({
  email: string().required("Required"),
  password: string().required("Required"),
});

const Login = () => {
  const router = useRouter();
  const {user, loading, isAuthenticated} = useAuth();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form data", data);
    router.push('/profile');
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  if(loading) {
    return<h2>loading...</h2>
  };

  if(isAuthenticated) {
    router.push('/profile');
  };

  return (
    <section>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>E-mail</label>
        <input 
          type="text" 
          name="email" 
          placeholder="Email@email.com" 
          {...register('email')} 
          />
          <label htmlFor='password'>Password</label>
        <input
          type="password"
          name="password"
          placeholder="****"
          {...register('password')}
        />
        <button type="submit">Log in</button>
      <Link href="/signup">Don't have an account? register here</Link>
      </LoginForm>
    </section>
  );
};

export default Login;