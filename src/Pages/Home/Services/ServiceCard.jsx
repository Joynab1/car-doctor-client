import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBeer, FaRegArrowAltCircleRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-cyan-800 text-xl font-semibold'>Price: ${price}</p>
                <div className="card-actions flex items-center justify-between">
                    <button className="btn btn-active btn-accent">Buy Now</button>
                    <Link> <button className='text-cyan-800'> <FaArrowRight></FaArrowRight> </button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;