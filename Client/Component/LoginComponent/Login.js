import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'twrnc';
import { login } from '../../services/operations/generate&verifyOTP';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signinImages from "../../assets/loginim.png";
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
  const [fontsLoaded] = useFonts({
    MadimiOne: require('../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf'),
    TwinkleStar: require('../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const[loading,setLoading]=useState(false)
  const[passwordMatched,setPasswordMatched]=useState(true)
  const[userVerified,setUserVerified]=useState(true)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigation=useNavigation();
  const navigate = useNavigation();

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    if (email.toLowerCase().endsWith('@gmail.com')) {
      Alert.alert(
        'Default Email Addition',
        'gmail.com will be added by default.'
      );
      return;
    }
    // setLoading(true);
    const response = await login(email+"@gmail.com", password);
    if(response.data.message==="password Doesn't Matches"){
       setPasswordMatched(false);
       setLoading(false);
       return;
    }
    if(response.data.message==="Sign Up First"){
      setUserVerified(false);
      setLoading(false);
      return;
    }
    await AsyncStorage.setItem('token', response.data.token);
    setLoading(false);
    navigate.navigate?.('HomePage');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[tw`h-full w-full bg-white mt-5 flex flex-col `]}>
      <View style={tw`w-11/12 mx-auto`}>
        <Image source={signinImages} style={[tw``, {marginTop: 70, height: 200, width: 300 }]} />
        <Text style={[tw`text-2xl mt-4`, { fontFamily: "MadimiOne" }]}>Login</Text>
        <Text style={tw`mt-2 text-slate-500 text-lg`}>Please Sign in to continue</Text>
        <View style={styles.container}>
          <View style={[styles.searchContainer, isFocused && styles.searchContainerFocused]}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Text style={[styles.emailSuffix, isFocused && styles.emailSuffixFocused]}>@gmail.com</Text>
          </View>
          {
             userVerified===false && (
              <Text style={[tw`text-red-700  pb-2`, { fontFamily: "MadimiOne" }]}>User Not Registered</Text>
             )
          }
          <View style={styles.searchContainer}>
          <TextInput
            style={[styles.input, isPasswordFocused && styles.inputPasswordFocused]} 
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
         
          </View>
          {
             passwordMatched===false && (
              <Text style={[tw`text-red-700  pb-2`, { fontFamily: "MadimiOne" }]}>Password Dosen't Match</Text>
             )
          }
          {/*spinner*/}
          <Spinner
            visible={loading}
          />
        </View>
        <TouchableOpacity style={tw` mx-auto p-4 px-22  rounded-full  bg-green-400`} onPress={handleLogin}>
          <Text style={[tw` text-white text-lg`,{fontFamily:"MadimiOne"}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
           navigation?.navigate("Signup")
        }}>
            <Text  style={[tw` mt-4 mx-auto text-[16px] text-green-600`,{fontFamily:"MadimiOne"}]}>Don't Have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 8,
    zIndex: 0,
    maxWidth: 300,
    marginHorizontal: 1,
  },
  searchContainer: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#CDD9ED',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  searchContainerFocused: {
    borderColor: '#15803d', // Change border color when focused
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'inherit',
    color: '#99A3BA',
  },
  inputFocused: {
    borderColor: '#15803d', 
  },
  inputPasswordFocused: {
    borderColor: '#15803d', 
  },
  emailSuffix: {
    height: "100%",
    fontWeight: '500',
    paddingVertical: 9,
    paddingHorizontal: 9,
    fontSize: 15,
    borderLeftWidth: 1,
    borderLeftColor: "#d1d5db",
    color: '#99A3BA',
  },
  emailSuffixFocused: {
    backgroundColor: '#15803d',
    color: '#fff',
  },
});

export default Login;
