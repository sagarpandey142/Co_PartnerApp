import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
import Signup from './Component/SignupComponent/Signup';
import professionalRole from './reducers/professionalRole';
import JobPage from './Component/Pages/JobPage';
import JobDesc from './Component/Pages/JobDesc';
// import Signup from './Component/SignupComponent/Signup';
// import GetStarted from './Component/GetStarted';
// import ProfessionalRole from './Component/SignupComponent/ProfessionalRole';
// import UserBio from './Component/SignupComponent/UserBio';
// import Upload from './Component/SignupComponent/Upload'
// import HomePage from './Component/Pages/HomePage';
// import Verification from "./Component/SignupComponent/Verification"
// import Skill from './Component/SignupComponent/Skill';
// import { ToastContainer } from 'react-native-toast-message';
// import Login from './Component/LoginComponent/Login';





export default function App() {
  const Stack = createStackNavigator();
  return (
 
    <Provider store={store}>
          <NavigationContainer>
      
               <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
                  {/* <Stack.Screen name="Signup" component={Signup}/>
                     <Stack.Screen name="Verification" component={Verification}/> 
                  <Stack.Screen name="GetStarted" component={GetStarted}/>
                  <Stack.Screen name="ProffesionalInfo" component={ProfessionalRole}/> 
                  <Stack.Screen name="userBio" component={UserBio}/>
                  <Stack.Screen name="Skill" component={Skill}/> 
                  <Stack.Screen name='HomePage' component={HomePage}/>
                  <Stack.Screen name="Login" component={Login}/> */}
                  {/* <Stack.Screen name="JobPage" component={JobPage}/> */}
                  <Stack.Screen name="JobDesc" component={JobDesc}/>
                  
               </Stack.Navigator> 
          </NavigationContainer>
     </Provider>

 
 
  )
}