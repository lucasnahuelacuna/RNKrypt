import millify from 'millify';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Row = ({ text, value, justifyContent, rank }: any) => (
  <View style={!justifyContent ? styles.rowText : styles.rowtextJC}>
    <Text style={styles.text}>{ text }:</Text>
    <Text style={styles.value}>{ rank ? '#' + millify(value) : millify(value) }</Text>
  </View>
)

const styles = StyleSheet.create({
    rowText: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowtextJC: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
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

export default Row