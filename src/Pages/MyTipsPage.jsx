import React, { useEffect } from 'react';

const MyTipsPage = () => {

     useEffect(() => {
            document.title = "My Tips";
        }, []);
    
    return (
        <div>
            <h1 className='text-7xl font-read py-20 text-center'>This is My Tips Page</h1>
        </div>
    );
};

export default MyTipsPage;