import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <h1>This Is MainLayout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;