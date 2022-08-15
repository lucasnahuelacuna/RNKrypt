import { useEffect, useState } from 'react'

export const useCryptocurrency = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [prices, setPrices] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
      fetchCryptoInfo();
    }, [])
    
    const fetchCryptoInfo = async () => {
        try {
            const res = await fetch(`https://coingecko.p.rapidapi.com/coins/${id}/market_chart?vs_currency=usd&days=7`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3c0221433cmsh8d72181be8e749ep1b28d9jsna9d5be2efa76',
                    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
                }
            });
            const data = await res.json();
            
            const prices = data.prices.map(item => {
                return item[1];
            })
            const timestamp = data.prices.map(item => {
                let date = new Date(item[0]).toLocaleDateString();
                return date.slice(3,5);
            })
            
            setPrices(prices);
            setDate(timestamp);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        isLoading,
        prices,
        date
    }
}
