import React,{ useEffect, useState } from 'react';


const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://powerful-castle-19347.herokuapp.com/booking`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleDeleteClick = id => {
        const proceed = window.confirm("Are you sure, you want to delete");
        if(proceed) {
            const url = `https://powerful-castle-19347.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1) {
                    alert('Deleted Successfully')
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
        }
    }
    return (
        <div className='container'>
           <div className="p-5">
           <h1 className='text-center mt-5 mb-5'>My Orders</h1>
            <div className='table-responsive-sm'>
            <table style={{backgroundColor: "#2563eb", color: "#cbd5e1"}} className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Order</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => 
                            
                            <tr>
                            <th scope="row">*</th>
                            <td>{order.name}</td>
                            <td>{order.orderName}</td>
                            <td>$ {order.orderPrice}</td>
                            <td>{order.date}</td>
                            <td>{order.orderStatus}</td>
                            <td><i style={{cursor: 'pointer'}} onClick={() => handleDeleteClick(order._id)} className="fas fa-trash text-danger"></i></td>
                        </tr>

                        )
                    }

                </tbody>
            </table>
            </div>
           </div>
        </div>
    );
};

export default MyOrder;