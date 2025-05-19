import React, { useEffect } from 'react';

const ShareTips = () => {

     useEffect(() => {
            document.title = "Share Tips"; // ✅ My custom title 
        }, []);
    
    return (
        <div>
            <h1 className='text-7xl font-read py-20 text-center'>This is Share tips Page</h1>
        </div>
    );
};

export default ShareTips;