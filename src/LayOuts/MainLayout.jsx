import React from 'react';
import {Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div className='min-h-screen  overflow-x-hidden flex flex-col'>
            <Navbar />
            
            
            {navigation.state === 'loading' && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
                    <span className="loading loading-spinner loading-xl text-green-600"></span>
                </div>
            )}
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;
