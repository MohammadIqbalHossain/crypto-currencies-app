import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const CoinDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    console.log(details);

    useEffect( () => {
        const url = ` https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [id]);
    
    return (
        <div>
            <div>
             
            </div>
            <div>

            </div>
        </div>
    );
};

export default CoinDetails;