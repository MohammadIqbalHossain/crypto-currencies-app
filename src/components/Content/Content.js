import React from 'react';

const Content = () => {
    return (
        <div className="flex justify-center items-center  flex-col mt-44">
            <h1 className="text-5xl font-bold font-mono">Contact Us,  our office address down below</h1>
            <div className="mt-8">
                <button className="border-2 py-2 px-4 bg-blue-500 font-semibold text-white mr-4 ">US Address</button>
                <button className="border-2 py-2 px-4 bg-blue-500 font-semibold text-white ">BD Address</button>
            </div>

        </div>
    );
};

export default Content;