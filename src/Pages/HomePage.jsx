import React, { useEffect } from 'react';
import BannerSlide from '../Components/BannerSlide';
import FeaturedGardener from '../Components/FeaturedGardener';
import TopTips from '../Components/TopTips';
import GardenTools from '../Components/GardenTools';
import FinalSection from '../Components/FinalSection';
import NewsLetter from '../Components/NewsLetter';
import SeasonalPlant from '../Components/SeasonalPlant';

const HomePage = () => {
     useEffect(() => {
            document.title = "Home"; 
        }, []);
    
    return (
        <>
        <div>
            <BannerSlide></BannerSlide>
            <TopTips></TopTips>
            <FeaturedGardener></FeaturedGardener>
            
            <GardenTools></GardenTools>
            <SeasonalPlant></SeasonalPlant>
            <FinalSection></FinalSection>
            <NewsLetter></NewsLetter>

        </div>
        
        </>
    );
};

export default HomePage;