import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width;

const FilmItem = ({film}) => {
  return (
    <View>
        <Image
        source={{uri: film?.image}}
        style={{height: 300, width: width * 0.9, borderRadius: 5}}
      />
      <Text>Title: {film.title}</Text>
      <Text>Original Title: {film.original_title}</Text>
    </View>
  )
}

export default FilmItem