import React from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import CardNews from '../components/CardNews';
import { useNews } from '../hooks/useNews'

const News = () => {
  const { news, isLoading } = useNews();

  if(isLoading) {
    return <ActivityIndicator />
  }

  return (
    <ScrollView style={styles.container}>
        <Text>Cryto News</Text>
        {
          news.map((news, index) => (
            <CardNews 
              title={news?.name}
              image={news?.image?.thumbnail?.contentUrl}
              description={news?.description}
            />
          ))
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  }
})

export default News