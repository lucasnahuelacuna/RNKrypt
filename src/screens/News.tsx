import React from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CardNews from '../components/CardNews';
import { useNews } from '../hooks/useNews'

const News = () => {
  const { news, isLoading } = useNews();

  if(isLoading) {
    return <ActivityIndicator />
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
          <Text style={styles.title}>Cryto News</Text>
          {
            news.map((news, index) => (
              <CardNews 
                title={news?.name}
                image={news?.image?.thumbnail?.contentUrl}
                description={news?.description}
                key={index}
              />
            ))
          }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 25,
    color: '#000',
    marginVertical: 20,
},
})

export default News