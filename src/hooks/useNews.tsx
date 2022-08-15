import React, { useEffect, useState } from 'react'

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
        const res = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&setLang=english&cc=us&textFormat=Raw&freshness=Week&count=${12}`, {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '3c0221433cmsh8d72181be8e749ep1b28d9jsna9d5be2efa76',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        });
        const data = await res.json();
        setNews(data.value);
        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }
}
  
  return {
    news,
    isLoading
  }
}
