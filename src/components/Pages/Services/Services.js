import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://powerful-castle-19347.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-bg">
            <div className='container'>
                <div className="py-5">
                    <h1 style={{color: "#cbd5e1"}} className='text-center mb-5'>Services</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;