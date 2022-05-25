import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

type FilmItem = {
    film: Film;
}
type Film = {
    image: string;
    title: string;
    original_title: string;
}

const width = Dimensions.get('window').width;

const FilmItem = ({film}: FilmItem) => {
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