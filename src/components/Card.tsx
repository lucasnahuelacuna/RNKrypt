import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row from './Row';


const Card = ({ id, 
  name, 
  icon, 
  rank, 
  price, 
  market, 
  dailyChange,
  fullyDilutedValuation,
  totalVolume,
  high24h,
  low24h,
  circulatingSupply,
  totalSupply,
  maxSupply,
  ath,
  atl 
}: any) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity style={styles.cardContainer}
      onPress={() => navigation.navigate('Details', { 
        id, 
        name,
        icon,
        price,
        rank,
        market,
        dailyChange,
        fullyDilutedValuation,
        totalVolume,
        high24h,
        low24h,
        circulatingSupply,
        totalSupply,
        maxSupply,
        ath,
        atl 
      })}
    >
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{ rank }. { name }</Text>
          <Image 
            source={{
              uri: icon
            }}
            style={styles.iconImage}
          />
        </View>
        <View style={styles.horizontalLine}  />
        <View style={styles.cardBody}>
          <Row text='Price' value={price} justifyContent={false} />
          <Row text='Market Cap' value={market} justifyContent={false} />
          <Row text='Daily Change' value={dailyChange} justifyContent={false} />
        </View>
    </TouchableOpacity>
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