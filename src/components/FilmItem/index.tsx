import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { IFilmItem } from '../../interfaces/appInterfaces';

const width = Dimensions.get('window').width;

const FilmItem = ({film}: IFilmItem) => {
  return (
    <View style={{
      alignItems: 'center',
      marginHorizontal: 5,
      marginVertical: 5
    }}>
        <Image
        source={{uri: film?.image}}
        style={{height: 220, width: width * 0.4, borderRadius: 5}}
      />
      <Text>{film.title.substring(0,13)}...</Text>
      <Text>{film.original_title.substring(0,4)}...</Text>
    </View>
  )
}

export default FilmItem