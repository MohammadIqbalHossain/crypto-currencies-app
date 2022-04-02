import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const CoinDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    console.log(details);
    const { name, symbol, market_cap_rank, country_origin,contact, hashing_algorithm, genesis_date, last_updated, community_score, developer_score, liquidity_score, public_interest_score  } = details;

    const {image} = details?.image?.large;

    useEffect( () => {
        const url = ` https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [id]);
    
    return (
        <div className="flex flex-col  justify-between mx-auto w-[800px] text-left items-center md:flex-row">
            <div className="order-2">
                <h1>General Info</h1>
                <hr />
               <p>Coin name: {name}</p>
               <p>Market cap rank: {market_cap_rank}</p>
               <p>Origin: {country_origin ? country_origin : "Not avilable"}</p>
               <p>Contact Address: {contact}</p>
               <p>Hasing Algorithm: {hashing_algorithm}</p>
               <p>Genesis Date: {genesis_date}</p>
               <p>Last Update: {last_updated}</p>
               <h1>Scroes: </h1>
               <hr />
               <p>Commiunity Score: {community_score}</p>
               <p>Developer Score: {developer_score}</p>
               <p>Liqidity Score: {liquidity_score}</p>
               <p>Piblic Inteset Score: {public_interest_score}</p>
            </div>
            <div className="order-1">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default CoinDetails;