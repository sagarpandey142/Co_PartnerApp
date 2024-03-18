import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { CheckBox } from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { updateSignupData } from '../../reducers/signupReducer';
import { useFonts } from 'expo-font';
import tw from 'twrnc';
import logo from '../../assets/logo.png'
// import { useNavigation } from '@react-navigation/native';


const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('India');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const dispatch = useDispatch();
  const data=useSelector((state)=>state.signup);
  
  const [fontsLoaded] = useFonts({
    MadimiOne:require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    TwinkleStar:require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
  });

  if (!fontsLoaded) {
    return null; 
  }

  const handleSignup = () => {
    // const navigation = useNavigation();
    // navigation?.navigate('Upload');
    const formData = {
      firstName,
      lastName,
      email,
      password,
      country,
      agreeTerms,
    };
    dispatch(updateSignupData(formData));

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setCountry('India');
    setAgreeTerms(false);

  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingTop:40 }}>
      <Image
      source={require('../../assets/logo.png')}
      style={{ width: 100, height: 100 }}
    />

      <Text style={{ fontSize: 40, fontWeight: 'semibold', marginBottom: 10, fontFamily: 'MadimiOne'}}>Sign up to find</Text>
      <Text style={{ fontSize: 40, fontWeight: 'semibold', marginBottom: 10, fontFamily: 'MadimiOne' }}>your love</Text>
      <View style={{ width: '100%', marginBottom: 10}}>
      <View style={{ flexDirection: 'row' }}>

        <View style={{flexDirection:'column', marginRight: 30}}>
        <Text style={[tw`font-semibold p-2 text-black`,{fontFamily: 'TwinkleStar',fontSize:15 }]}>First Name</Text>
        <TextInput
        style={{ borderWidth: 1,borderColor:'gray', paddingHorizontal: 40, marginBottom: 10, borderRadius: 4,  height: 40, }}
        placeholder="First name"
        placeholderTextColor="gray"
        value={firstName}
        onChangeText={setFirstName}
        />
        </View>

        <View style={{flexDirection:'column'}}>
        <Text style={[tw`font-semibold p-2 text-black`,{fontFamily: 'TwinkleStar',fontSize:15, }]}>Last Name</Text>
        <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 40, borderRadius: 4, marginBottom: 10, height: 40, borderColor: '#d4cdcd'}}
        placeholder="Last name"
        placeholderTextColor="gray"
        value={lastName}
        onChangeText={setLastName}
        />
        </View>
      </View>
      <Text style={[tw`font-semibold p-2 text-black`,{fontFamily: 'TwinkleStar',fontSize:15, }]}>Email</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#d4cdcd', paddingHorizontal: 8, marginBottom: 10,borderRadius: 8, height: 45, borderColor: '#d4cdcd' }}
          placeholder="Email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={[tw`font-semibold p-2 text-black`,{fontFamily: 'TwinkleStar',fontSize:15, }]}>Password</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 8, marginBottom: 10, borderRadius: 4, height: 40, borderColor: '#d4cdcd' }}
          placeholder="Password (8 or more characters)"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={[tw`font-semibold p-2 text-black`,{fontFamily: 'TwinkleStar',fontSize:15, }]}>Country</Text>
        <View style={{ borderWidth: 1, borderColor: '#d4cdcd', paddingHorizontal: 8, marginBottom: 10, }}>
          <Picker
            selectedValue={country}
            style={{ height: 50, width: '100%', }}
            onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
            <Picker.Item label="India" value="India" />
          </Picker>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, marginTop:7 }}>
        {/* <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} /> */}
        <Text style={{ marginLeft: 8, fontSize:15,fontFamily: 'TwinkleStar' }}>Yes, I understand and agree to the Upwork terms of Service, including the User Agreement and Privacy Policy.</Text>
      </View>
      <View>
      <TouchableOpacity style={[tw`bg-green-700 py-4 px-25 text-lg rounded-full mt-8`, ]} onPress={handleSignup}>
          <Text style={[tw`text-white mx-auto font-semibold`,{fontSize: 14,fontFamily: 'MadimiOne'}]}>Create my account</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 10,fontFamily: 'TwinkleStar' }}>Already have an account? 
      <TouchableOpacity onPress={() => {/* Add navigation logic */}}>
          <Text style={{ color: 'green', textDecorationLine: 'underline' }}> Log In</Text>
      </TouchableOpacity>
      </Text>
    </View>
  );
}

export default Signup;
