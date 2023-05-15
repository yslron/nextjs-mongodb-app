/* eslint-disable prettier/prettier */
import { Login } from '@/page-components/Auth';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="Login Page"
          content="Login Page for User to Login and Find Feed"
        />
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
