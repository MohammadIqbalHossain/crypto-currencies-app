import React, { useEffect, useState } from 'react';
import DisplayCoins from '../DisplayCoins/DisplayCoins';
import Spinner from '../Spinner/Spinner';


const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                setCoins(data)
                setLoading(false);
            });       

    }, [])

    return (
   <>
     {
         loading ? ( <Spinner/> ) : (
            <div>
            <div>
               <h1 className="mt-16 text-4xl font-bold font-mono">Choose the best one.</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                {
                    coins.map(coin => <DisplayCoins
                    key={coin.id} 
                    coins={coin}
                    >
                    </DisplayCoins>)
                }
            </div>

        </div>
         )
     }
  </>
       
    );
};

export default Coins