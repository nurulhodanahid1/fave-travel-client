import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const {googleSignIn, user, setUser, setIsLoading} = useAuth();
    const history = useHistory();
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            history.push(redirect_uri)
            setUser(result.user)
        }).finally(() => setIsLoading(false))
    }
    return (
        <div className='mt-5 mb-5 text-center'>
           <div className="p-5">
           <h2 style={{color: "#2563eb"}} className='mb-4'>Please Login</h2>
            <button className='google-btn' onClick={handleGoogleLogin}>Google Sign In</button>
           </div>
        </div>
    );
};

export default Login;