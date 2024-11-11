import React from 'react';
import { useForm } from 'react-hook-form';
import './SignupPage.css';

function SignupPage() {
    let{register,handleSubmit}=useForm();
  return (
    <div className='back min-vh-100'>
    <div className=''>
        <h1 className='text-center text-light pt-5'></h1>
        <div className="w-25 card card-body mx-auto mt-5">
            <form onSubmit={handleSubmit}>
                {/* email */}
                <div className='mt-3'>
                    <label htmlFor="email" className="form-label">Username or Email</label>
                    <input type="email" {...register('email')} id="email" className="form-control" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" {...register('password')} id="password" className='form-control' />
                </div>
                <h6 className="text-center mt-2">------or------ </h6>
                <h5 className="text-center">Sign in with</h5>
                <div className='d-flex justify-content-around mb-5 mt-4'>
                    <img src="https://www.svgrepo.com/show/327365/logo-google.svg" width="35px"/>
                    <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png" width="35px" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="35px" />
                </div>
                <div className='mt-3 text-center'>
                    <button type="submit" className='btn btn-dark'>Sign in</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SignupPage