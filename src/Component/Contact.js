import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <>
            <div className='container my-4 py-4'>
                <div className='row my-3 py-3'>
                    <h2 className='fw-bold text-uppercase text-center text-primary'>welcome to contact page</h2>
                   
                    <input type="text" placeholder='enter your name' required />
                    
                    <input type="text" placeholder='enter your email' required/>
                    <input type="phone" placeholder='enter your phone' />
                    <input type="address" placeholder='enter your address' />
                    <input type="text" placeholder='enter your password' />
                    <input type="text" placeholder='enter your confirm password' />
                  
                    
                </div>
                <button className='btn btn-outline-primary w-100 fs-3 '>submit  </button>
            </div>
        </>
    )
}
export default Contact;