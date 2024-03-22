import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'twrnc';
import { login } from '../../services/operations/generate&verifyOTP';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [fontsLoaded] = useFonts({
    MadimiOne: require('../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf'),
    TwinkleStar: require('../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf'),
  });

  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();


  const handleLogin = async (e) => {
 
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    e.preventDefault();
    console.log("eamil pass", email,password)
    const response = await login(email,password);

    navigate.navigate?.('HomePage');
    console.log("response", response);
    

  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[tw`flex flex-col mx-auto justify-between items-center`]}>
      <Text style={[tw`text-3xl text-green-600`, { fontFamily: 'MadimiOne' }]}>Login here</Text>
      <Text style={[tw`text-2xl`, { fontFamily: 'MadimiOne' }]}>Welcome back you have missed</Text>
      <TextInput
        placeholder='Email'
        style={[tw`border border-gray-500 px-6 py-2 rounded-full bg-[#dcfce7] text-xl`, { fontFamily: 'TwinkleStar' }]}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder='Password'
        style={[tw`border border-gray-500 px-6 py-2 rounded-full bg-[#dcfce7] text-xl`, { fontFamily: 'TwinkleStar' }]}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={[tw`text-2xl bg-green-500 px-25 py-2 rounded-full `, { fontFamily: 'MadimiOne' }]} >Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[tw`text-base text-green-500`, { fontFamily: 'TwinkleStar' }]}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[tw`text-base`, { fontFamily: 'TwinkleStar' }]}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
