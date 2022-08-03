import React, { useEffect, useState } from 'react';

export const useCryptos = () => {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);

    useEffect(() => {
      loadCryptos();
    }, [])
    
    const loadCryptos = async () => {
        try {
            const res = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=10', {
                method: 'GET',
                headers:{
                    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                    'x-rapidapi-key': 'f9f54b81e7msh182a4629e8c29ccp1d0449jsn1c4daeee4f59'
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