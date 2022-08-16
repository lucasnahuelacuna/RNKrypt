import React, { useEffect } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import { useCryptos } from '../hooks/useCryptos';

const Home = ({ navigation }: any) => {
    const { cryptocurrencies } = useCryptos();

    useEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])
    
    return (
        <SafeAreaView style={styles.homeContainer}>
            <ScrollView style={styles.homeContainer}>
                <Text style={styles.title}>Top 10 Cryptocurrencies</Text>
                {
                    cryptocurrencies.map((item, index) => (
                        <Card
                            id={item.id} 
                            name={item.name}
                            icon={item.image}
                            rank={item.market_cap_rank}
                            price={item.current_price}
                            market={item.market_cap}
                            dailyChange={item.price_change_percentage_24h}
                            fullyDilutedValuation={item.fully_diluted_valuation}
                            totalVolume={item.total_volume}
                            high24h={item.high_24h}
                            low24h={item.low_24h}
                            circulatingSupply={item.circulating_supply}
                            totalSupply={item.total_supply}
                            maxSupply={item.max_supply}
                            ath={item.ath}
                            atl={item.atl} 
                            key={index} 
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#f2f2f2'
    },
    title: {
        fontSize: 25,
        color: '#000',
        marginTop: 15,
        marginBottom: 20
    }
})
export default Home