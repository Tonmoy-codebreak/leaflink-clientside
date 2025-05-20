import React, { useEffect } from 'react';

const BrowseTips = () => {
    useEffect(() => {
                document.title = "Browse Tips"; // ✅ My custom title 
            }, []);
        
        return (
            <div>
                <h1 className='text-7xl font-read py-20 text-center'>This is Browse Tips Page</h1>
            </div>
        );
};

export default BrowseTips;