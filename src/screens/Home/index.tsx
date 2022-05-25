import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ListFilms from '../../components/ListFilms'

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ListFilms />
        {/* <PaginationButtons setPage={setPage} page={page} /> */}
        {/* <Button screenName={'Checkout'} text={'Ir a checkout'} /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index