import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='mb-5'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link style={{color: "#cbd5e1", fontWeight: "700"}} className="navbar-brand" to="/">FaveTravel</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{color: "#cbd5e1"}} className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: "#cbd5e1"}} className="nav-link active" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: "#cbd5e1"}} className="nav-link active" aria-current="page" to="/about">Questions</Link>
                            </li>

                            {user.email && <li className="nav-item dropdown">
                                <Link style={{color: "#cbd5e1"}} className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="myOrder">My Order</Link></li>
                                    <li><Link className="dropdown-item" to="allOrders">Admin All Order</Link></li>
                                    <li><Link className="dropdown-item" to="addService">Add Service</Link></li>
                                </ul>
                            </li>}

                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li style={{color: "#cbd5e1"}} className="nav-item mx-2 color"><strong>{user.email && 'Welcome,'} </strong>{user.displayName} </li>
                            {user.displayName ? <button className='logout-btn' onClick={logOut}>Log Out</button> :
                                <Link to="/login">
                                    <button className='login-btn'>Login</button>
                                </Link>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;