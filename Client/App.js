import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
<<<<<<< HEAD
import Signup from './Component/SignupComponent/Signup';
import GetStarted from './Component/GetStarted';
import ProfessionalRole from './Component/SignupComponent/ProfessionalRole';
import UserBio from './Component/SignupComponent/UserBio';
import Upload from './Component/SignupComponent/Upload'
import HomePage from './Component/Pages/HomePage';

=======
// import Signup from './Component/SignupComponent/Signup';
// import GetStarted from './Component/GetStarted';
// import ProfessionalRole from './Component/SignupComponent/ProfessionalRole';
// import UserBio from './Component/SignupComponent/UserBio';
// import Upload from './Component/SignupComponent/Upload'
// import Verification from './Component/SignupComponent/Verification';
import Skill from './Component/SignupComponent/Skill'
import Login from './Component/LoginComponent/Login'
>>>>>>> eff2736bbb9efb68ef310c63028287bfe1b860c1



export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
          <NavigationContainer>

<<<<<<< HEAD
          <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
=======
          {/* <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
>>>>>>> eff2736bbb9efb68ef310c63028287bfe1b860c1
              <Stack.Screen name="Signup" component={Signup}/>
              <Stack.Screen name="Verification" component={Verification}/> 
              <Stack.Screen name="GetStarted" component={GetStarted}/>
              <Stack.Screen name="ProffesionalInfo" component={ProfessionalRole}/> 
              <Stack.Screen name="userBio" component={UserBio}/>
<<<<<<< HEAD
              <Stack.Screen name="UploadResume" component={Upload}/> 
              <Stack.Screen name='HomePage' component={HomePage}/>
          </Stack.Navigator>
         
          </NavigationContainer>
=======
               <Stack.Screen name="Upload" component={Upload}/> 
               <Stack.Screen name="Skill" component={Skill}/> 
          </Stack.Navigator> */}
          <Login/>
          </NavigationContainer> 

      
>>>>>>> eff2736bbb9efb68ef310c63028287bfe1b860c1
    </Provider>
 
 
  )
}
