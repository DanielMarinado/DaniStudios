import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ListFilms from '../../components/ListFilms'

const Index = ({navigation}: any) => {
  return (
    <SafeAreaView>
        <View style={{...styles.sombras}}>
          <Text style={{...styles.titulo}}>
            <Text style={styles.tituloBold}>Dani</Text>
            <Text style={styles.tituloTwo}>Ghibli</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Cam')}
        >
          <Text>Photo</Text>
        </TouchableOpacity>
        <ListFilms />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: "black",
    padding: 10,
    borderRadius: 10,
    margin: 7,
    marginHorizontal: 20,
  },
  tituloBold: {
    fontWeight: 'bold',
  },
  tituloTwo: {
    color: 'white',
  },
  sombras: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: '#F6972A',
  }
});

export default Index