import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IFilmItem } from '../../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;

const FilmItem = ({film}: IFilmItem) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={()=>navigation.navigate('Details', {film})}
    >
      <View style={styles.card}>
          <Image
            source={{uri: film?.image}}
            style={styles.img}
          />
          <Text style={styles.tituloBold}>{film.title.substring(0,13)}...</Text>
          <Text>{film.original_title.substring(0,4)}...</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  img: {
    height: 220, 
    width: width * 0.4, 
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  tituloBold: {
    fontWeight: 'bold',
  },
});

export default FilmItem