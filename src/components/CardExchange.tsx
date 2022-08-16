import millify from 'millify'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CardExchange = ({ name, trust, tradeVolume, image, trustScoreRank }: any) => {
  return (
    <View style={styles.container}>
        <Text style={{...styles.text, flex: 0.15}}>{trustScoreRank}</Text>
        <Image  source={{ uri: image }} style={styles.image} />
        <Text style={{...styles.text, flex: 0.30}}>{name}</Text>
        <Text style={{...styles.text, flex: 0.40, marginLeft: 15}}>{millify(tradeVolume)}</Text>
        <Text style={{...styles.text, flex: 0.15}}>{trust}/10</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 75,
        backgroundColor: '#fff',
        borderTopColor: '#000',
        borderTopWidth: 0.5,
        paddingHorizontal: 15
    },
    text: {
      color: '#000'
    },
    imageContainer: {
      overflow: 'hidden',
      width: 30,
      height: 30,
      borderRadius: 15
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 15,
      overflow: 'hidden',
      resizeMode: 'cover',
      marginRight: 10
    }
})

export default CardExchange