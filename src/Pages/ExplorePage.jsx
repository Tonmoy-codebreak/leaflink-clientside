import React, { useEffect } from 'react';

const ExplorePage = () => {

    useEffect(() => {
        document.title = "Explore Gardener"; // ✅ My custom title 
    }, []);

    return (
        <div>
            <h1 className='text-7xl font-read py-20 text-center'>This is Explore Page</h1>
        </div>
    );
};

export default ExplorePage;