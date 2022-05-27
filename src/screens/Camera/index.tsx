import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useContext, useEffect} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import { getDrawerStatusFromState } from '@react-navigation/drawer';


const Cam = ({navigation}: any) => {
  const camera: any = useRef();
  const devices = useCameraDevices();
  const device = devices.front;
  const isDrawerOpen = getDrawerStatusFromState(navigation.getState()) === 'open';


  if (device == null) return <Text>Loading</Text>;

  const takePhoto = async () => {
    const photoLocal = await camera.current.takeSnapshot({});
    console.log(photoLocal);

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
