import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useContext, useEffect} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import { PeliculasContext } from '../../navigation';


const Cam = ({navigation}: any) => {
  const camera: any = useRef();
  const {setPhoto, photoTaken, setPhotoTaken}: any = useContext(PeliculasContext);
  const devices = useCameraDevices();
  const device = devices.front;


  if (device == null) return <Text>Loading</Text>;

  const takePhoto = async () => {
    const photoLocal = await camera.current.takeSnapshot({});
    console.log(photoLocal);
    setPhoto(photoLocal);
    setPhotoTaken((prev: number)=>{ return prev + 1});
  };

  return (
    <>
      <Camera
        ref={camera}
        photo={true}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />

      <Text
        style={styles.txtPhotoTaken}
      >
        Photo's Taken: {photoTaken}
      </Text>

      <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.btnPhoto}
        onPress={takePhoto}
      >
        <Text
          style={styles.txtPhoto}
        >
          Take Photo
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnPhoto: {
    backgroundColor: 'black',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf: "center",
  },
  txtPhoto: {
    color: '#fff',
    textAlign: 'center'
  },
  txtPhotoTaken: {
    backgroundColor: 'orange',
    position: 'absolute',
    top: 0,
    alignSelf: "center",
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 1,
    padding: 15,
    borderRadius: 2,
    width: '100%'
  }
});

export default Cam;
