import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CardNews = ({ title, image, description }: any) => {
  return (
    <View style={styles.container}>
        <Image 
            source={{
                uri: image
            }}
            style={styles.image}
        />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 30,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        marginVertical: 20,
        textAlign: 'center'
    },
    text: {
        textAlign: 'justify',
        fontWeight: '300'
    }
})

export default CardNews