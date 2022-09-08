import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth()
    const [service, setService] = useState([]);
    const { id } = useParams();
    const { image, name, location, description, offer, duration, members, price } = service;
    let [date,setDate] = useState(new Date());

    
    
    useEffect(() => {
        const url = `https://powerful-castle-19347.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    
    const onSubmit = data => {
        data.orderName = name;
        data.orderId = service._id;
        data.orderPrice = price;
        data.orderStatus = "Pending";
        console.log(data)
        axios.post(`https://powerful-castle-19347.herokuapp.com/booking`, data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Booking Successfully')
                reset();
            }
        })
    
    };

    return (
        <div className='container g-5'>
            <div className="p-5">
            <h1 className='text-center mt-5 mb-5'>Booking</h1>
            <div className="row">
                <div className="col-md-6">
                    <img style={{ width: "100%" }} src={image} alt="" />
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="col-md-6">
                    <div className='add-booking-table'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user?.displayName} {...register("name", {required:true})} />
                        <input defaultValue={user?.email} {...register("email", {required:true})} />
                        <input required {...register("address")} placeholder="Address" />
                        <input required {...register("city")} placeholder="City" />
                        <input required type="number" {...register("phone")} placeholder="Phone Number"/>
                        <input defaultValue={date.toLocaleDateString()} {...register("date")} />
                        <button className='order-button' type="submit">Order Now</button>
                    </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Booking;