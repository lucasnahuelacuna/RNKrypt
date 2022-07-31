import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({ value }: any) => {
  return (
    <View style={styles.cardContainer}>
        <Text>Card { value }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: '#000',
        borderWidth: 1,
        height: 100,
        marginVertical: 5
    }
})

export default Card