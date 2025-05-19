import React, { useEffect } from 'react';

const LoginPage = () => {
     useEffect(() => {
            document.title = "Log in"; // ✅ My custom title 
        }, []);
    
    return (
        <div>
            <h1 className='text-7xl font-read py-20 text-center'>This is Login Page</h1>
        </div>
    );
};

export default LoginPage;