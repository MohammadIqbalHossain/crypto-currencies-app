import React from 'react';

const UsAddress = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center text-left bg-green-400 p-4">
            <div className="font-mono mr-8 text-lg">
                <p>Street: 23th hall street, Chicago</p>
                <p>City: Chicago</p>
                <p>Phone: 01851704822</p>
                <p>Email: mdiqbalhossain5170@gamil.com</p>
            </div>
            <div className="mt-8 md:mt-0">
                <h1 className="uppercase font-sans text-4xl font-bold">usa address</h1>
            </div>
        </div>
    );
};

export default UsAddress;