import React, { useEffect, useState } from 'react';

export const useCryptos = () => {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);

    useEffect(() => {
      loadCryptos();
    }, [])
    
    const loadCryptos = async () => {
        try {
            const res = await fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=10&order=market_cap_desc', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3c0221433cmsh8d72181be8e749ep1b28d9jsna9d5be2efa76',
                    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
                }
            });
            const data = await res.json();
            setCryptocurrencies(data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        cryptocurrencies
    }
}