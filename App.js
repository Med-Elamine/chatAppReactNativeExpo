import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import PersonalInfo from './components/PersonalInfo';
import Styles from "./components/Styles";
import React, { useState } from 'react';
import Chat from './components/Chat';
import AppLoading from 'expo-app-loading';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const storageUserNameKey = "chatApp-userName";
  const storageImageKey = "chatApp-image";
  const [username, setUserName] = useState("");
  const [image, setImage] = useState("");

  const onPersonalInfoClosed = async(name, image) => {
    setUserName(name);
    await AsyncStorageLib.setItem(storageUserNameKey,name);
    setImage(image);
    await AsyncStorageLib.setItem(storageImageKey,image);
  }
  
  

  const fetchPersonalData = async () =>{
    let fetchUserName = await AsyncStorageLib.getItem(storageUserNameKey);
    let userName = fetchUserName == null ? "" : fetchUserName;
    let fetchImage = await AsyncStorageLib.getItem(storageUserNameKey);
    let image = fetchImage == null ? "" : fetchImage;
    setUserName(userName);
    setImage(image);
  }

  if(isLoading){
    return(
      <AppLoading startAsync={fetchPersonalData} onFinish={() => setIsLoading(false)} onError={console.warn} />
    )
  }

  let activeComponent = username != "" ? <Chat username={username} image={image} />
: <PersonalInfo onClosed={onPersonalInfoClosed} />;

  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

