import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);
    console.log(token)
    useEffect(() => {

        if(!token){
        navigate('/login')

    }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
                setIsLoading(false);
            }
        }).catch(error => {
            console.error("Error fetching user profile:", error);
            localStorage.removeItem("token");
            navigate('/login');
        }); 
    }, [token])
    
     if(isLoading){
        return <div>Loading...</div>; // Or a spinner component
    } 
  return (
    <>
      {children}
    </>
  );
}

export default UserProtectedWrapper