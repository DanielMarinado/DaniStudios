import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { PeliculasContext } from '../../navigation';


const Gallery = () => {
  const {photoTaken, photo}: any = useContext(PeliculasContext);

  console.log(photo, 'desde gallery');

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
      }}>
      { photoTaken > 0 ? (
        <View>
            <Image
            source={{uri: `file://, ${photo.path}`}}
            style={{height: 300, width: 300}}
            />

            <Text>Photo's taken: {photoTaken}</Text>

        </View>
      ) : <Text>You haven't taken photos yet.</Text>}
      
    </ScrollView>
  );
};

export default Gallery;
