import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvide';



const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(user);
    
    if(loading){
     return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-fuchsia-400  mx-auto"></div> 
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;