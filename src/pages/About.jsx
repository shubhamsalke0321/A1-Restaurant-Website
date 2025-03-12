import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>Welcome to A1 Restaurant, where delicious flavors meet a warm and inviting atmosphere. Since our establishment, we have been dedicated to serving mouth-watering dishes made from the freshest ingredients.</p>
                <p>At A1 Restaurant, our journey began with a passion for great food and exceptional hospitality. Our chefs bring years of experience to craft exquisite meals that satisfy every palate, whether you’re craving traditional favorites or exploring new flavors.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>From flavourful North Indian curries and aromatic biryanis to sizzling tandoori delights and mouth-watering desserts, our menu has something for everyone. We also offer a variety of vegetarian, vegan, and gluten-free options to cater to all dietary preferences.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;