import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ShareTips = () => {

     useEffect(() => {
            document.title = "Share Tips";
        }, []);

        const { user } = useContext(AuthContext);
    
    return (
        <div>
            <h1 className='text-7xl font-read py-20 text-center'>{user.displayName} will share tips</h1>
        </div>
    );
};

export default ShareTips;