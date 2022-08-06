import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

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
          <Text style={styles.text}>Price: { price }</Text>
          <Text style={styles.text}>Market Cap: { market }</Text>
          <Text style={styles.text}>Daily Change: { dailyChange }</Text>
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
    text: {
      color: '#000',
      fontSize: 15,
      marginBottom: 10
    }
})

export default Card