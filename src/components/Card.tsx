import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import millify from 'millify';

const Row = ({ text, value }: any) => (
  <View style={styles.rowText}>
    <Text style={styles.text}>{ text }:</Text>
    <Text style={styles.value}>{ millify(value) }</Text>
  </View>
)

const Card = ({ value, icon, rank, price, market, dailyChange }: any) => {
  return (
    <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{ rank }. { value }</Text>
          <Image 
            source={{
              uri: icon
            }}
            style={styles.iconImage}
          />
        </View>
        <View style={styles.horizontalLine}  />
        <View style={styles.cardBody}>
          <Row text='Price' value={price} />
          <Row text='Market Cap' value={market} />
          <Row text='Daily Change' value={dailyChange} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        height: 200,
        marginVertical: 5,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      marginTop: 20
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000'
    },
    iconImage: {
      width: 40,
      height: 40
    },
    horizontalLine: {
      backgroundColor: "#eee",
      width: '100%',
      height: 1,
      marginTop: 10,
      marginBottom: 18
    },
    cardBody: {
      marginHorizontal: 15
    },
    rowText: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: {
      color: '#000',
      fontSize: 15,
      marginBottom: 10,
      fontWeight: '300'
    },
    value: {
      color: '#000',
      fontSize: 15,
      marginBottom: 10,
      fontWeight: '400',
      marginLeft: 5
    }
})

export default Card