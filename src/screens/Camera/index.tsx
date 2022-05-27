import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useContext, useEffect} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import { PeliculasContext } from '../../navigation';


const Cam = ({navigation}: any) => {
  const camera: any = useRef();
  const {photo, setPhoto, photoTaken, setPhotoTaken}: any = useContext(PeliculasContext);
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
      <TouchableOpacity onPress={takePhoto}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
    </>
  );
};

export default Cam;
