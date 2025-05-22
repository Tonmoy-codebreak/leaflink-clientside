import React, { useEffect } from 'react';
import BannerSlide from '../Components/BannerSlide';
import FeaturedGardener from '../Components/FeaturedGardener';
import TopTips from '../Components/TopTips';
import GardenTools from '../Components/GardenTools';
import FinalSection from '../Components/FinalSection';

const HomePage = () => {
     useEffect(() => {
            document.title = "Home"; 
        }, []);
    
    return (
        <>
        <div>
            <BannerSlide></BannerSlide>
            <FeaturedGardener></FeaturedGardener>
            <TopTips></TopTips>
            <GardenTools></GardenTools>
            <FinalSection></FinalSection>

        </div>
        
        </>
    );
};

export default HomePage;