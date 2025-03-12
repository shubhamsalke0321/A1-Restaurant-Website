import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: 'English Breakfast',
        description: 'mushrooms, baked beans, hash browns, and toast with butter',
        price: 'Rs.40'
    },
    {
        id: 2,
        name: ' Meat Lover’s Breakfast',
        description: 'Chicken Sausage & Scrambled Eggs,Bacon & Cheese Omelette',
        price: 'Rs.50'
    },
    {
        id: 3,
        name: 'Marathi Nasta',
        description: 'Poha,idli sambar,sambar Vade,Masala Dosa',
        price: 'Rs.20'
    }
];
const lunch = [
    {
        id: 1,
        name: 'A1 Special Thali (Veg/Non-Veg)',
        description: 'A grand platter with dal, sabzi, rice, roti, raita, pickle, papad & dessert.',
        price: 'Rs.200'
    },
    {
        id: 2,
        name: 'Paneer Butter Masala with Naan',
        description: ' Creamy paneer gravy served with butter naan',
        price: 'Rs.140'
    },
    {
        id: 3,
        name: 'Dal Tadka with Jeera Rice',
        description: 'Yellow lentils tempered with garlic & ghee, served with cumin rice',
        price: 'Rs.100'
    }
];

const dinner = [
    {
        id: 1,
        name: 'Chicken Handi with Butter Naan',
        description: 'Slow-cooked, creamy chicken curry with a smoky flavor.',
        price: 'Rs.250'
    },
    {
        id: 2,
        name: 'Chicken Tikka Masala with Garlic Naan',
        description: 'Smoky chicken tikka pieces in a tangy tomato-based gravy.',
        price: 'Rs.220'
    },
    {
        id: 3,
        name: 'Mutton Keema Pav',
        description: 'Spicy minced mutton cooked with masalas, served with buttered pav.',
        price: 'Rs.200'
    }
];

const dessert = [
    {
        id: 1,
        name: 'Gulab Jamun',
        description: 'Soft and juicy deep-fried dumplings soaked in sugar syrup.',
        price: 'Rs.20'
    },
    {
        id: 2,
        name: 'Chocolate Brownie with Ice Cream',
        description: 'Warm, fudgy brownie served with vanilla ice cream.',
        price: 'Rs.50'
    },
    {
        id: 3,
        name: 'Falooda (Royal/Ice Cream/Mango)',
        description: 'Sweet and chilled vermicelli drink with rose syrup and basil seeds.',
        price: 'Rs.70'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Veg</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Non-veg</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;