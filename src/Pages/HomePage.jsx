import React, { useEffect } from 'react';
import BannerSlide from '../Components/BannerSlide';
import FeaturedGardener from '../Components/FeaturedGardener';
import TopTips from '../Components/TopTips';
import GardenTools from '../Components/GardenTools';
import FinalSection from '../Components/FinalSection';
import NewsLetter from '../Components/NewsLetter';

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
            <NewsLetter></NewsLetter>

        </div>
        
        </>
    );
};

export default HomePage;