import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    if (user && user.email) {
        return children;
    } else {
        return <Navigate to="/user/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;
