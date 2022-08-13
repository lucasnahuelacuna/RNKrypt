import React from 'react'
import { Text, View } from 'react-native'

const Details = ({ route }: any) => {
    const { params } = route;

    return (
        <View>
            <Text>Name: {params.name }</Text>
            <Text>ID: {params.id }</Text>
        </View>
    )
}

export default Details