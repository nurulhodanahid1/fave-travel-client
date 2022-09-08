import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, image, name, location, description, offer, duration, members, price} = props.service;
    return (
        <div>
            <div className="col">
                <div className="card design-card">
                    <img src={image} className="card-img-top" alt="servicesImage" height="200px" />
                    <div className="card-body">
                    <h3 style={{color: "#2563eb"}} className="card-title">{name}</h3>
                        <div className='d-flex justify-content-between'>
                        <h6 style={{color: "#1e293b"}} className="card-title">{location}</h6>
                        <h5 className='text-danger'>{offer}</h5>
                        </div>
                        <p className="card-text">{description.slice(0,60)}</p>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h6>Duration: {duration} days</h6>
                            <h6>Members: {members} people</h6>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h4>$ {price}</h4>
                            <Link to={`/booking/${_id}`}>
                            <button className='card-btn'>Booking</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;