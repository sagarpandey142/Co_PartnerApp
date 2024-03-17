import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
import Signup from './Component/SignupComponent/Signup';
import GetStarted from './Component/GetStarted';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <Signup/>
    </Provider>
  )
}
