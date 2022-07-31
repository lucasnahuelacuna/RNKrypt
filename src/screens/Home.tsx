import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';

const Home = () => {
    const [cryprocurrencies, setCryptocurrencies] = useState([1,2,3,4,5,6,7,8,9,10]);

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}>Top 100 Cryptocurrencies</Text>
            <ScrollView>
                {
                    cryprocurrencies.map((item, index) => (
                        <Card value={item} key={index} />
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