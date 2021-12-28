
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NormalButton from "../components/LinkButton";

const PlayScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NormalButton 
        bg_color="#DCEB35" 
        text="back to HOME"

        onPress={() => {navigation.navigate('Home')}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 50
  },
})


export default PlayScreen;

