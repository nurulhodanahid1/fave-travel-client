import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
    console.log(data)
    axios.post('https://powerful-castle-19347.herokuapp.com/services', data)
    .then(res => {
        if(res.data.insertedId) {
            alert('Inserted Successfully');
            reset();
        }
    })
        
    };

    return (
        <div className='addService-table'>
           <div className="p-5">
           <h1 className='text-center mt-5 mb-5'>Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input required {...register("name")} placeholder="Name of Place" />
      <input required  {...register("location")} placeholder="Location Name" />
      <input required  {...register("offer")} placeholder="How many % offer your agency"/>
      <textarea required  className='add-textArea' {...register("description")} placeholder="Description" />
      <input required  type="number" {...register("duration")} placeholder="How many days duration" />
      <input required  type="number" {...register("members")} placeholder="How Many group member" />
      <input required  type="number" {...register("price")} placeholder="Package Price" />
      <input required  {...register("image")} placeholder="Image url" />
      <button className="order-button" type="submit">Add</button>
    </form>
           </div>
        </div>
    );
};

export default AddService;