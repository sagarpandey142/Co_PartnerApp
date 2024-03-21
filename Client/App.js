import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
import Signup from './Component/SignupComponent/Signup';
import GetStarted from './Component/GetStarted';
import ProfessionalRole from './Component/SignupComponent/ProfessionalRole';
import UserBio from './Component/SignupComponent/UserBio';
import Upload from './Component/SignupComponent/Upload'
import HomePage from './Component/Pages/HomePage';




export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
          <NavigationContainer>

          <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Signup" component={Signup}/>
              <Stack.Screen name="GetStarted" component={GetStarted}/>
              <Stack.Screen name="ProffesionalInfo" component={ProfessionalRole}/> 
              <Stack.Screen name="userBio" component={UserBio}/>
              <Stack.Screen name="UploadResume" component={Upload}/> 
              <Stack.Screen name='HomePage' component={HomePage}/>
          </Stack.Navigator>
         
          </NavigationContainer>
    </Provider>
 
 
  )
}
