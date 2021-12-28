

import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NormalButton from "../components/LinkButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NormalButton 
        bg_color="#DCEB35" 
        text="Normal"

        onPress={() => {navigation.navigate('Normal')}}
      />
      <NormalButton 
        bg_color="#DCEB35" 
        text="No Header"

        onPress={() => {navigation.navigate('NoHeader')}}
      />
      <NormalButton 
        bg_color="#DCEB35" 
        text="Custom Buttons"

        onPress={() => {navigation.navigate('CustomBtns')}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
})

export default HomeScreen;