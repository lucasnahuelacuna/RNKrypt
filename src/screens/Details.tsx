import React, { useEffect } from 'react'
import { Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useCryptocurrency } from '../hooks/useCryptocurrency';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import Row from '../components/Row';

const chartConfig = {
    backgroundGradientFrom: "#f2f2f2",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#f2f2f2",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 21, 41, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: true
};

const Details = ({ route }: any) => {
        const { params } = route;
        const { isLoading, prices, date } = useCryptocurrency(params.id);
        const navigation = useNavigation<any>();
        const screenWidth = Dimensions.get("window").width;

        useEffect(() => {
          navigation.setOptions({
            title: params.name
          })
        }, [])
        
        const getArray = (array: any[]) => {
            const arr: any[] = [];
            for(let i=0; i<array.length; i+=10) {
                arr.push(array[i]);
            }

            return arr;
        }

        return (
            <ScrollView>
                <Text style={styles.price}>${params.price }</Text>
                {
                    isLoading ? <Text>Cargando...</Text>
                        : <LineChart 
                            data={{
                                labels: getArray(date),
                                datasets: [
                                {
                                    data: getArray(prices),
                                    color: (opacity = 1) => `rgba(5, 80, 150, ${opacity})`,
                                    strokeWidth: 2
                                }
                                ],
                            }}
                            width={screenWidth}
                            height={350}
                            chartConfig={chartConfig}
                            verticalLabelRotation={0}
                            horizontalLabelRotation={0}
                            withInnerLines={false}
                            withDots={false}
                            withVerticalLabels={true}
                            bezier
                        /> 
                }
                <View style={styles.dataDetails}>
                    <Row text="Market Cap Rank" value={params.rank} justifyContent={true} rank/>
                    <Row text="Market Cap" value={params.market} justifyContent={true}/>
                    <Row text="Fully Diluted Valuation" value={params.fullyDilutedValuation} justifyContent={true}/>
                    <Row text="Trading Volume" value={params.totalVolume} justifyContent={true}/>
                    <Row text="24h High" value={params.high24h} justifyContent={true}/>
                    <Row text="24h Low" value={params.low24h} justifyContent={true}/>
                    <Row text="Available Supply" value={params.circulatingSupply} justifyContent={true}/>
                    <Row text="Total Supply" value={params.totalSupply} justifyContent={true}/>
                    <Row text="Max Supply" value={params.maxSupply} justifyContent={true}/>
                    <Row text="All-Time High" value={params.ath} justifyContent={true}/>
                    <Row text="All-Time Low" value={params.atl} justifyContent={true}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert(
                            params.name,
                            `Do you want to buy ${params.name}?`,
                            [
                                {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                                },
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                        )}
                    >
                        <Text style={styles.buttonText}>Buy Cryptocurrency</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    dataDetails: {
        marginHorizontal: 35
    },
    price: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
        color: '#000'
    },
    buttonContainer: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       marginVertical: 50
    },
    button: {
        backgroundColor: '#65AD4A',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#fff'
    }
})
export default Details