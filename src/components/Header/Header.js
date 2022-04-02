import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-center items-center  bg-slate-200 md:justify-between px-4 h-[100px]">
            <div>
                <h1 className="font-mono text-3xl hidden md:block font-bold hover:text-orange-300 ">₿Crypto Geeks</h1>
            </div>
            
            <div className="flex gap-4 text-xl font-sans font-bold text-blue-500 hover:text-blue-700">
                <NavLink to='/home' className={({isActive}) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    Home
                </NavLink>

                <NavLink to='/coins' className={({isActive}) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    Coins
                </NavLink>

                <NavLink to='/content' className={({isActive}) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    Content
                </NavLink>

                <NavLink to='/about'>
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;