import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target 

        const phone = form.phone.value 
        const password = form.password.value 
        console.log(phone, password)

        axios(`http://localhost:5000/newUser/${phone}`)
        .then(res => {
            if(res.data.email){
                signIn(res.data.email, password)
                .then(res => {
                    navigate('/')
                })
                .catch(error => setError('invalid credential'))
            } else {
                setError('invalid credential')
            }
        })

    }

    return (
        <div className='px-[5%] sm:px-[7%] lg:px-[10%]'>
            <h1 className='pt-20 pb-10 text-center text-5xl font-bold'>Login Now</h1>
            <form onSubmit={handleLogin} className='bg-white w-1/2 mx-auto flex flex-col gap-6 px-10 py-8'>
                <div>
                    <label htmlFor="phone">Your Phone Number</label>
                    <input className='border mt-1 border-gray-300 px-4 py-3 rounded-sm outline-0 w-full' type="tel" id="phone" name="phone" pattern="\+880\d{10}" title="Please enter a valid Bangladeshi phone number" required/>
                </div>
                
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input className='border w-full mt-1 border-gray-300 px-4 py-3 rounded-sm outline-0' type="password" name='password' required/>
                </div>
                <button className='w-full bg-[#FCB543] py-3 rounded-sm text-white font-bold text-lg'>Login</button>
                <p className='text-red-700 text-xs'>{error}</p>

                <p>Don't have an account? <Link className='text-[#FCB543]' to={'/register'}>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;