import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer, CommonActions, useNavigation } from '@react-navigation/native'; // Import CommonActions
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
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
import Login from './Component/LoginComponent/Login';
import Index from "./Component/Pages/CreateProject/Index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import image1 from "./assets/logo.jpg"
import { DecodedTokenHandler } from './services/operations/generate&verifyOTP';
import tw from "twrnc"
import  Profile  from "./Component/Pages/ProfilePage/Profile"



export default function App() {
  const Stack = createStackNavigator();
  const [initialRoute, setInitialRoute] = useState("Signup");
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
      } finally {
        setIsLoading(false);
      }
    }

    checkUserAuth();
  }, []);

  if (isLoading) {
    return (
        <View style={tw` h-[100%] w-[100%] items-center justify-center bg-white`}>
          <Image source={image1} />
      </View>
    )
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
          <Stack.Screen name='HomePage' component={HomePage} options={{
            gestureEnabled: false,
            animationEnabled: false,
            ...CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomePage' }],
            }),
          }}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="JobPage" component={JobPage}/>
          <Stack.Screen name="JobDesc" component={JobDesc}/>
          <Stack.Screen name='Index' component={Index}/>
          <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator> 
      </NavigationContainer>
    </Provider>
  );
}
