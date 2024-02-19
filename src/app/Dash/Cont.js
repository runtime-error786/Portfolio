"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Anton } from 'next/font/google'
import "./g.css";
import { RevealWrapper } from  'next-reveal'

const Kani1 = Anton({
    weight: '400',
    subsets: ['latin'],
})
export default function MultilineTextFields({fw}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        country: '',
        city: '',
        githubId: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = () => {
        // Check if any field is empty
        for (const key in formData) {
            if (formData[key] === '') {
                toast.error(`Please fill out all fields.`);
                return; // Stop submission if any field is empty
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error(`Please enter a valid email address.`);
            return;
        }
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            country: '',
            city: '',
            githubId: '',
            message: ''
        });
        toast.success(`${formData.name}'s message submitted successfully.`);
    };


    return (
        <div style={{overflowX:"hidden"}}>

        <RevealWrapper style={{ overflowX: 'hidden' }}  origin='left' delay={0} duration={1000} distance='50px' reset={true}>

        <div ref={fw} className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className={`text-center ${Kani1.className} k1 mt-2`}>Contact us</h1>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                style={{ backgroundColor: 'lightblue' }}
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                style={{ backgroundColor: 'lightblue' }}
                                id="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                style={{ backgroundColor: 'lightblue' }}
                                id="phoneNumber"
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                style={{ backgroundColor: 'lightblue' }}
                                id="country"
                                label="Country"
                                variant="outlined"
                                fullWidth
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                style={{ backgroundColor: 'lightblue' }}
                                id="city"
                                label="City"
                                variant="outlined"
                                fullWidth
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                style={{ backgroundColor: 'lightblue' }}
                                id="githubId"
                                label="Github Id"
                                variant="outlined"
                                fullWidth
                                value={formData.githubId}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                style={{ backgroundColor: 'lightblue' }}
                                id="message"
                                label="Message"
                                multiline
                                maxRows={4}
                                variant="outlined"
                                fullWidth
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button onClick={handleSubmit} className="button" style={{ '--clr': '#7808d0' }}>
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
        </RevealWrapper>
        </div>
    );
}
