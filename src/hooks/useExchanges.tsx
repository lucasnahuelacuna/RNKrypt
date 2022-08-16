import React, { useEffect, useState } from 'react'

export const useExchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchExchanges();
  }, []);

  const fetchExchanges = async () => {
    try {
        const res = await fetch(`https://coingecko.p.rapidapi.com/exchanges`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3c0221433cmsh8d72181be8e749ep1b28d9jsna9d5be2efa76',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        });
        const data = await res.json();
        setExchanges(data);
        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }
}
  
  return {
    exchanges,
    isLoading
  }
}