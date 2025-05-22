import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';

const UserEntryLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
                        <Navbar />
            
            
            {navigation.state === 'loading' && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
                    <span className="loading loading-spinner loading-xl text-green-600"></span>
                </div>
            )}

            <Outlet />
        </div>
    );
};

export default UserEntryLayout;