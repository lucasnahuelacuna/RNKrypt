import { useEffect, useState } from 'react'

export const useCryptocurrency = (id: string) => {
    const [cryptocurrency, setCryptocurrency] = useState({});

    useEffect(() => {
      fetchCryptoInfo();
    }, [])
    
    const fetchCryptoInfo = async () => {
        try {
            const res = await fetch(`https://coingecko.p.rapidapi.com/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3c0221433cmsh8d72181be8e749ep1b28d9jsna9d5be2efa76',
                    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
                }
            });
            const data = await res.json();
            setCryptocurrency(data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        cryptocurrency
    }
}
