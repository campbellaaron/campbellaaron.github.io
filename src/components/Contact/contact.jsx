import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [state, handleSubmit] = useForm("meqvrnde");

    const resetFormFields = () => {
        setPhone('')
        setEmail('')
        setMessage('')
    }
    if (state.submitting) {
        return <p className='submitting-msg'>Submitting…</p>;
    }
    if (state.succeeded) {
        return <div className='form-submitted'><p className='success-msg'>Thanks for your message! Please allow 1-3 business days for me to get back to you.</p></div>;
    }
    
    return (
        <section id="contact">
            <h2 className="heading">Contact Me</h2>
            <p className="description">Please fill out the form below to discuss any work opportunities. 🤘🏼</p>
            <form method="POST" onSubmit={handleSubmit} className="contactForm">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="userEmail" placeholder="name@example.com"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} id="userPhone" placeholder="+1 (123) 456-7890" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors}/>
                <label htmlFor="">Your Message:</label>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} id="yourMessage" cols="30" rows="10" placeholder="Enter your message here"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                <button type="submit" value="Send" className="formSubmitBtn" disabled={state.submitting}>Send Message</button> <button type="reset" className='resetBtn' onClick={resetFormFields}>Reset</button>
            </form>
        </section>
    )
}

export default Contact