import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Card = ({ value, icon }: any) => {
  console.log(icon);
  return (
    <View style={styles.cardContainer}>
        <Text>Card { value }</Text>
        <Image 
          source={{
            uri: icon
          }}
          style={styles.iconImage}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: '#000',
        borderWidth: 1,
        height: 100,
        marginVertical: 5
    },
    iconImage: {
      width: 50,
      height: 50
    }
})

export default Card