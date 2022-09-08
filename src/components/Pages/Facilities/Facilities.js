import React from 'react';
import './Facility.css';

const Facilities = () => {
    return (
        <div className='container'>
            <h1 className='text-center mb-5 mt-5'>Facilities</h1>
            <div className='d-flex justify-content-between '>
                <div className='box-shadow'>
                    <h3 className='text-center text-warning'>us-bangla airlines</h3>
                </div>
                <div className='box-shadow'>
                    <h3 className='text-center text-warning'>Internation Hotel</h3>
                </div>
                <div className='box-shadow'>
                    <h3 className='text-center text-warning'>Currency Exchange</h3>
                </div>
                <div className='box-shadow'>
                    <h3 className='text-center text-warning'>Photographer</h3>
                </div>
            </div>
        </div>
    );
};

export default Facilities;