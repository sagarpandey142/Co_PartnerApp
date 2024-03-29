import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider,  } from 'react-redux';
import store from './store/configureStore';
import professionalRole from './reducers/professionalRole';
import JobPage from './Component/Pages/JobPage';
import JobDesc from './Component/Pages/JobDesc';
import Signup from './Component/SignupComponent/Signup';
import GetStarted from './Component/GetStarted';
import ProfessionalRole from './Component/SignupComponent/ProfessionalRole';
import UserBio from './Component/SignupComponent/UserBio';
import Upload from './Component/SignupComponent/Upload';
import HomePage from './Component/Pages/HomePage';
import Verification from "./Component/SignupComponent/Verification";
import Skill from './Component/SignupComponent/Skill';
import { ToastContainer } from 'react-native-toast-message';
import Login from './Component/LoginComponent/Login';
import Index from "./Component/Pages/CreateProject/Index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateToken } from './reducers/signupReducer';
import AppLoading from 'expo-app-loading';

export default function App() {
  const Stack = createStackNavigator();
  const [initialRoute, setInitialRoute] = useState("Login");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkUserAuth() {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setInitialRoute('HomePage');
        } else {
          setInitialRoute('Login');
        }
      } catch (error) {
        console.error('Error while checking user authentication:', error);
        // Handle error
      } finally {
        setIsLoading(false); // Set loading state to false after authentication check
      }
    }

    checkUserAuth();
  }, []);

  if (isLoading) {
    return <AppLoading/>
  }


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Verification" component={Verification}/> 
          <Stack.Screen name="GetStarted" component={GetStarted}/>
          <Stack.Screen name="ProfessionalInfo" component={ProfessionalRole}/> 
          <Stack.Screen name="UserBio" component={UserBio}/>
          <Stack.Screen name="Skill" component={Skill}/> 
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="JobPage" component={JobPage}/>
          <Stack.Screen name="JobDesc" component={JobDesc}/>
          <Stack.Screen name='Index' component={Index}/>
        </Stack.Navigator> 
      </NavigationContainer>
    </Provider>
  );
}
