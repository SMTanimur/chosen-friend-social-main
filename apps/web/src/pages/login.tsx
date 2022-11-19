/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { authAPI } from '@api/authAPI';
import Head from 'next/head';
import Link from 'next/link';
import MessageError from '@components/form/MassageError';
import { Input, InputPassword } from '@components/input';
import Label from '@components/form/Label';
import FormGroup from '@components/form/FormGroup';
import Button from '@components/button/Button';
import { GetServerSideProps } from 'next';
import { withAuthRedirect } from '@HOC/withAuthRedirect';
import toast from 'react-hot-toast';
const LoginPage = () => {
  const router = useRouter();
 
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email invalid!')
        .required('Please Enter your valid Email!'),
      password: Yup.string()
        .required('Password is Invalid!')
        .min(8, 'Password must be at least 8 characters'),
    }),
    onSubmit: async (values) => {
      try {
      await authAPI.signIn(values);
        router.push('/');
      } catch (error) {
        toast.error(error.message)
      }
    },
  });

  return (
    <div >
      <Head>
        <title>twitter:Login-page</title>
      </Head>
      <div className='w-full h-screen flex items-center justify-center'>
      <div className='px-4 py-8 lg:p-10 max-w-[500px]  border border-gray-900 shadow-sm  flex flex-col justify-center items-center mx-auto bg-white  rounded'>
        <h1 className='text-2xl text-gray-800'>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup className='mt-4'>
            <Label htmlFor='email'>Email</Label>
            <Input
              name='email'
              placeholder='Email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <MessageError>{formik.touched.email && formik.errors?.email}</MessageError>
          </FormGroup>
          <FormGroup className='mt-4'>
            <Label htmlFor='password'>Your Password</Label>
            <InputPassword
              name='password'
              placeholder='your password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <MessageError>{formik.touched.password && formik.errors?.password}</MessageError>
          </FormGroup>
          <Button primary className='w-full mt-3'>
            Login
          </Button>
        </form>
        <div className='mt-6 text-center'>
          <span className='text-[#00000042]'>Don't have an account ? </span>
          <Link href='/signup' className='text-gray999'>
            singUp
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
export const getServerSideProps: GetServerSideProps = withAuthRedirect(
  async () => {
    return {
      props: {},
    };
  }
);
