import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="lg:w-1/2 absolute right-10 top-1/2 rounded-lg shadow-2xl border-white border-8" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className="text-3xl font-bold text-cyan-600">About Us</h3>
                <h1 className="text-5xl font-bold">We are qualified and of experienced in this field!</h1>
                <p className="py-6">"Welcome to our car servicing website! Discover exceptional automotive care, skilled technicians, affordable rates, and convenient online booking. Drive with confidence."</p>
                <p className="py-6">"Welcome to our car servicing website! Discover exceptional automotive care, skilled technicians, affordable rates, and convenient online booking. Drive with confidence."</p>
                <button className="btn btn-active btn-accent">Get more info</button>
            </div>
            </div>       
        </div>
    );
};

export default About;