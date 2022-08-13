import React from 'react'
import { Text, View } from 'react-native'
import { useCryptocurrency } from '../hooks/useCryptocurrency';

const Details = ({ route }: any) => {
    const { params } = route;
    const { cryptocurrency } = useCryptocurrency(params.id);

    return (
        <View>
            <Text>Name: {params.name }</Text>
            <Text>ID: {params.id }</Text>
            <Text>
                {
                    JSON.stringify(cryptocurrency, null, 3)
                }
            </Text>
        </View>
    )
}

export default Details