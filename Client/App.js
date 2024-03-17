import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
import Signup from './Component/SignupComponent/Signup';
import GetStarted from './Component/GetStarted';
import ProfessionalRole from './Component/SignupComponent/ProfessionalRole';
import UserBio from './Component/SignupComponent/UserBio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
         <UserBio/>
    </Provider>
  )
}
