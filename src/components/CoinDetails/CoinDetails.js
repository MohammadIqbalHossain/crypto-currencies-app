import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';



const CoinDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);

    console.log(details);
    const { name, market_cap_rank, country_origin,contact, hashing_algorithm, genesis_date, last_updated, community_score, developer_score, liquidity_score, public_interest_score} = details;

   
    useEffect( () => {
        setLoading(true)
        const url = ` https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
        setLoading(false);
    }, [id]);
    
    return (
       <>
       {
         loading ? ( <Spinner /> ) : (
            <div className="flex flex-col justify-between md:w-[800px]  text-left items-center mt-16 md:flex-row mx-auto">
            <div className="order-2 md:order-1">
                <h1 className="text-4xl mt-4">General Info</h1>
                <hr />
               <p>Coin name: {name}</p>
               <p>Market cap rank: {market_cap_rank}</p>
               <p>Origin: {country_origin ? country_origin : "Not avilable"}</p>
               <p>Contact Address: {contact ? contact : " We are confidential"}</p>
               <p>Hasing Algorithm: {hashing_algorithm ? hashing_algorithm : " Contact us to know."}</p>
               <p>Genesis Date: {genesis_date ? genesis_date : " Sorry, Maybe data is didn't added."}</p>
               <p>Last Update: {last_updated}</p>
               <h1 className="text-4xl mt-4">Scroes: </h1>
               <hr />
               <p>Commiunity Score: {community_score}</p>
               <p>Developer Score: {developer_score}</p>
               <p>Liqidity Score: {liquidity_score}</p>
               <p>Piblic Inteset Score: {public_interest_score}</p>
            </div>
            <div className="order-1 md:order-2">
                <img src={details.image?.large} alt="" />
            </div>
        </div>
         ) 
       }
       </>
    );
};

export default CoinDetails;