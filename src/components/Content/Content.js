import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


const Content = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center  flex-col mt-44 m-6">
            <h1 className="text-5xl font-bold font-mono">Contact Us,  our office address down below</h1>
            <div className="mt-8">
                <button onClick={() => navigate(`us-address`)} className="border-2 py-2 px-4 bg-blue-500 font-semibold text-white mr-4 ">US Address</button>

                <button onClick={() => navigate(`bd-address`)} className="border-2 py-2 px-4 bg-blue-500 font-semibold text-white ">BD Address</button>
            </div>
            <div className="mt-20 ">
                <Outlet />
            </div>
        </div>
    );
};

export default Content;