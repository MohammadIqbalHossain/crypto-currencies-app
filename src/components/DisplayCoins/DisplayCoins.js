import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCoins = ({ coins }) => {

    console.log(coins);
    const { image, name, id, symbol } = coins;
    // console.log(id);
    return (

        <Link to={`/coin-details/${id}`}>
            <div className="flex items-center justify-between w-[350px] border-2 rounded p-4 my-5 mx-auto">
                <div>
                    <img className="w-40" src={image} alt="coinImage" />
                </div>


                <div>
                    <h2 className="text-3xl font-mono">{name}</h2>
                    <p className="float-right font-mono text-lg font-bold text-gray-400"><small>/{symbol}</small></p>
                </div>

            </div>
        </Link>
    );
};

export default DisplayCoins;