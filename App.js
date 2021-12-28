
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NormalScreen from './screens/NormalScreen';
import NoHeaderScreen from './screens/NoHeaderScreen';
import CustomBtnsScreen from './screens/CustomBtnsScreen';

const Stack = createStackNavigator();

const MyStack = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator  
        initialRouteName="Top"
        screenOptions={{
          headerStyle: {
              backgroundColor: "#265366",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
              fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Normal" 
          options={{ 
            title: 'Normal',
          }}
          component={NormalScreen} 
        />
        <Stack.Screen 
          name="NoHeader" 
          options={{ 
            title: 'No Header',
            headerShown: false,
          }}
          component={NoHeaderScreen} 
        />
        <Stack.Screen 
          name="CustomBtns" 
          options={{ 
            title: 'Custom Buttons',
          }}
          component={CustomBtnsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
