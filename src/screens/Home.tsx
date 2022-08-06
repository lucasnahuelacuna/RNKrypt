import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import { useCryptos } from '../hooks/useCryptos';

const Home = () => {
    const { cryptocurrencies } = useCryptos();

    console.log('Cryptocurrencies TEST: ', cryptocurrencies);
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}>Top 10 Cryptocurrencies</Text>
            <ScrollView>
                {
                    cryptocurrencies.map((item, index) => (
                        <Card 
                            value={item.name}
                            icon={item.image}
                            rank={item.market_cap_rank}
                            price={item.current_price}
                            market={item.market_cap}
                            dailyChange={item.price_change_percentage_24h} 
                            key={index} 
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginBottom: 50,
        backgroundColor: '#f2f2f2'
    },
    title: {
        fontSize: 25,
        color: '#000'
    }
})
export default Home