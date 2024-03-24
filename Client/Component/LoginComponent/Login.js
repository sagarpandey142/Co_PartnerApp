import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'twrnc';
import { login } from '../../services/operations/generate&verifyOTP';
import { useNavigation } from '@react-navigation/native';
import signinImages from "../../assets/loginim.png"

const Login = () => {
  const [fontsLoaded] = useFonts({
    MadimiOne: require('../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf'),
    TwinkleStar: require('../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
   
    const response = await login(email, password);
    navigate.navigate?.('HomePage');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[tw`h-full w-full bg-white mt-5 flex flex-col border border-red-500`]}>
      <View style={tw`w-11/12 mx-auto`}>
        <Image source={signinImages} style={[tw`border border-red-500`, {marginTop: 70, height: 200, width: 300 }]} />
        <Text style={[tw`text-2xl mt-4`, { fontFamily: "MadimiOne" }]}>Login</Text>
        <Text style={tw`mt-2 text-slate-500 text-lg`}>Please Sign in to continue</Text>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <TouchableOpacity style={tw` mx-auto p-4 px-22  rounded-full  bg-green-400`} onPress={handleLogin}>
          <Text style={[tw` text-white text-lg`,{fontFamily:"MadimiOne"}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text  style={[tw` mt-4 mx-auto text-green-600`,{fontFamily:"MadimiOne"}]}>Dosen't Have an account Signup</Text>
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
    borderRadius: 50,
    backgroundColor: 'linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%)',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 4,
    borderWidth: 0,
    color: '#9EBCD9',
    fontSize: 20,
    borderRadius: 50,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Login;
