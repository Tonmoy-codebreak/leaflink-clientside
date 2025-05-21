import React, { useEffect } from 'react';
import Footer from '../Components/Footer';

const HomePage = () => {
     useEffect(() => {
            document.title = "Home"; // ✅ My custom title 
        }, []);
    
    return (
        <>
        <div>
            <h1 className='text-5xl text-center py-36'>This Is home Page</h1>
        </div>
        
        </>
    );
};

export default HomePage;