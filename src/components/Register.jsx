import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const [message, setMessage]  = useState(""); // error message
    const {registerUser, signInWithGoogle} = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            await registerUser(data.email, data.password);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "성공적으로 회원가입 되었습니다.",
                timer: 1500
            })
        } catch(e) {
            console.log(e);
            setMessage("유효한 이메일과 비밀번호를 입력해주세요.");
        }
    }
    const handleGoogleSignIn = async() => {
        try {
            await signInWithGoogle()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "성공적으로 로그인 되었습니다.",
                timer: 1500
            })
            navigate("/");
        } catch(e) {
            console.log(e);
            setMessage("구글 로그인에 실패했습니다.");
        }
    }

  return (
    <div className='h-[calc(100vh_-_120px)] flex items-center justify-center'>
        <div className='shadow-lg rounded px-8 py-6 w-full max-w-md mx-auto bg-white '>
            <h2 className='text-2xl font-semibold mb-4'>Please Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                    <input 
                        {...register("email", {required: true})}
                        className='focus:shadow appearance-none leading-tight focus:outline-none border border-gray-300 rounded w-full py-2 px-3 '
                        type="email" name='email' id='email' placeholder='Email을 입력하세요.'/>
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                    <input 
                        {...register("password", {required: true})}
                        className='focus:shadow appearance-none leading-tight focus:outline-none border border-gray-300 rounded w-full py-2 px-3 '
                        type="password" name='password' id='password' placeholder='Password를 입력하세요.'/>
                </div>

                {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}

                <div className=''>
                    <button type='submit' 
                        className='bg-blue-500 cursor-pointer text-white font-bold hover:bg-blue-700 py-2 px-8 rounded-md focus:outline-none'>
                            회원가입
                    </button>
                </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>이미 계정이 있으신가요? <Link to="/login" className='text-blue-500 hover:text-blue-700'>로그인 하러가기</Link></p>

            {/* 구글 로그인 */}
            <div className='mt-4'>
                <button 
                    onClick={handleGoogleSignIn}
                    className='cursor-pointer bg-[#0D0842] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full flex-wrap gap-1 justify-center flex items-center'>
                    <FaGoogle className='mr-2'/>
                    Sign in with Google
                </button>
            </div>
            <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Register