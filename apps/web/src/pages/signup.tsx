import { userApi } from '@api/userAPI';
import FormGroup from '@components/form/FormGroup';
import Label from '@components/form/Label';
import MessageError from '@components/form/MassageError';
import { Input, InputPassword } from '@components/input';
import { useFormik } from 'formik'
import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from "yup";
const SignUpPage = () => {

  const router = useRouter()

   const formik = useFormik({
    initialValues:{
      email:"",
      fullName:"",
      username:"",
      confirm_password:"",
      password:""
    },
    validationSchema: Yup.object({
      email:Yup.string().email('Invalid Email').required('please enter your email'),
      fullName:Yup.string().required('Please Enter your FullName').max(20,"your name is too long!"),
      username:Yup.string().required('Please enter your userName'),
      password:Yup.string().required('Please enter password').min(8,"Password must be at least 8 characters"),
      confirm_password:Yup.string()
      .oneOf([Yup.ref("password")], "Confirm password does not match!")
        .required("Please enter password confirmation!"),
    }),
    onSubmit: async(value)=>{
     try {
      await userApi.signUp(value)
      router.push('/login')
     } catch (error) {
       toast.error(error.message)
     }
    }
   })
  return (
    <React.Fragment>
      <Head>
        <title>Twitter:SignUp page</title>
      </Head>
    <div className='layout-container flex items-center justify-center h-screen '>
       <div className='flex flex-col  w-[600px]  border border-black shadow-sm'>
         <div className='flex flex-col p-8 item-center'>
           <h1 className='text-2xl font-semibold text-gray-800 text-center'>SignUp</h1>
           <form action="" onSubmit={formik.handleSubmit}>
             <FormGroup className='mt-4'>
               <Label htmlFor='FullName'> Name </Label>
               <Input name='fullName'
                 placeholder='FullName'
                 onChange={formik.handleChange}
                 value={formik.values.fullName}
                 className='rounded-md focus:border-blue-600'
               />
               <MessageError>{formik.touched.fullName && formik.errors?.fullName}</MessageError>
             </FormGroup>
             <FormGroup className='mt-4'>
               <Label htmlFor='email'> Email </Label>
               <Input name='email'
                 placeholder='Email'
                 onChange={formik.handleChange}
                 value={formik.values.email}
                 className='rounded-md focus:border-blue-600'
               />
                <MessageError>{formik.touched.email && formik.errors?.email}</MessageError>
             </FormGroup>
             <FormGroup className='mt-4'>
               <Label htmlFor='Username'> UserName </Label>
               <Input name='username'
                 placeholder='userName'
                 onChange={formik.handleChange}
                 value={formik.values.username}
                 className='rounded-md focus:border-blue-600'
               />
                <MessageError>{formik.touched.username && formik.errors?.username}</MessageError>
             </FormGroup>
             <FormGroup className='mt-4'>
            <Label htmlFor='password'>Password</Label>
            <InputPassword
              name='password'
              placeholder='Password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <MessageError>{formik.touched.password && formik.errors?.password}</MessageError>
          </FormGroup>
          <FormGroup className='mt-4'>
            <Label htmlFor='confirm_password'>Confirm Password</Label>
            <InputPassword
              name='confirm_password'
              placeholder='Confirm_password'
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
            />
            <MessageError>
              {formik.touched.confirm_password && formik.errors?.confirm_password}
            </MessageError>
          </FormGroup>

            <button className='px-4 py-4 text-white text-lg bg-blue08f rounded-md hover:bg-opacity-80 transition-all w-full'
            type='submit'
            >
              Submit
            </button>
           </form>
         </div>
       </div>
    </div>
    </React.Fragment>
  )
}

export default SignUpPage