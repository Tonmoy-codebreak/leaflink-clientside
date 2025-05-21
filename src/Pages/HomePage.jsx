import React, { useEffect } from 'react';
import BannerSlide from '../Components/BannerSlide';

const HomePage = () => {
     useEffect(() => {
            document.title = "Home"; // ✅ My custom title 
        }, []);
    
    return (
        <>
        <div>
            <BannerSlide></BannerSlide>
        </div>
        
        </>
    );
};

export default HomePage;