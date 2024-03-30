import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target 

        const name = form.name.value 
        const email = form.email.value 
        const phone = form.phone.value 
        const password = form.password.value 

        const user = {name, email, phone, password}

        axios.post('http://localhost:5000/newUser', user)
        .then(res => {
            if(res.data == 'Already have an account'){
                setError(res.data)
                return
            } else {
                createUser(email, password)
                .then( result => {
                console.log(result.user)
            
                navigate("/")
                })
                .catch( error => {
                console.log(error.message)

        })
            }
        })

        
    }
    return (
        <div className='px-[5%] sm:px-[7%] lg:px-[10%]'>
            <h1 className='pt-20 pb-10 text-center text-5xl font-bold'>Login Now</h1>
            <form onSubmit={handleRegister} className='bg-white w-1/2 mx-auto flex flex-col gap-6 px-10 py-8'>
                <div>
                    <label htmlFor="phone">Your Name</label>
                    <input className='border mt-1 border-gray-300 px-4 py-3 rounded-sm outline-0 w-full' type="text" id="name" name="name" required/>
                </div>
                
                <div>
                    <label htmlFor="password">Your Email</label>
                    <input className='border w-full mt-1 border-gray-300 px-4 py-3 rounded-sm outline-0' type="email" name='email' required/>
                </div>

                <div>
                    <label htmlFor="phone">Your Phone Number</label>
                    <input className='border mt-1 border-gray-300 px-4 py-3 rounded-sm outline-0 w-full' type="text" id="phone" name="phone" pattern="\+880\d{10}" title="Please enter a valid Bangladeshi phone number" required/>
                </div>
                
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input className='border w-full mt-1 border-gray-300 px-4 py-3 rounded-sm outline-0' type="password" name='password' required/>
                </div>
                <button className='w-full bg-[#FCB543] py-3 rounded-sm text-white font-bold text-lg'>Login</button>
                <p className='text-red-500 text-xs'>{error}</p>

                <p>Already have an account? <Link className='text-[#FCB543]' to={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;