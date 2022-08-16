import React from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CardExchange from '../components/CardExchange'
import { useExchanges } from '../hooks/useExchanges'

const Exchanges = () => {
    const { exchanges, isLoading } = useExchanges();

    if(isLoading) {
        return <ActivityIndicator />
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.title}>Exchanges</Text>
                <View style={styles.container}>
                    <Text style={styles.text}>#</Text>
                    <Text style={styles.text}>Exchange</Text>
                    <Text style={styles.text}>Trade Volume</Text>
                    <Text style={styles.text}>Trust</Text>
                </View>
                {
                    exchanges.map((item, index) => (
                        <CardExchange 
                            name={item.name}
                            trustScoreRank={item.trust_score_rank}
                            tradeVolume={item.trade_volume_24h_btc}
                            trust={item.trust_score}
                            image={item.image}
                            key={index}
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 25,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    title: {
        fontSize: 25,
        color: '#000',
        marginVertical: 20,
        marginLeft: 20
    },
    text: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000'
    }
})

export default Exchanges