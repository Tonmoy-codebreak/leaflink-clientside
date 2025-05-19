import React, { useEffect } from 'react';

const SignUpPage = () => {
     useEffect(() => {
            document.title = "Sign Up"; // ✅ My custom title 
        }, []);
    
    return (
        <div>
            <h1 className='text-7xl font-read py-20 text-center'>This is Sign Up Page</h1>
        </div>
    );
};

export default SignUpPage;