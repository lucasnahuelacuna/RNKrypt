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
        marginBottom: 50
    },
    title: {
        fontSize: 25,
        color: '#000'
    }
})
export default Home