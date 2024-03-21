import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Linking } from 'react-native';
import tw from 'twrnc';
import Navbar from '../Common/Navbar';
import { AppLoading } from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Footer from '../Common/Footer';
import { updateProfessionalRole } from '../../reducers/professionalRole';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const ProfessionalRole = () => {
  const [value, setValue] = useState('');
  const [fontsLoaded] = useFonts({
    MadimiOne: require('../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf'),
    TwinkleStar: require('../../assets/Fonts/pe0pMI6IL4dPoFl9LGEmY6WaA_Rue1UwVg.ttf'),
  });
  
   
  return (
    <View style={tw`h-full w-full bg-white `}>
      <Navbar />
      <Text style={[tw``, { marginTop: 10, fontFamily: 'MadimiOne', fontSize: 28, marginLeft: 15, marginTop: 20 }]}>
        Craft your professional identity with precision and flair.
      </Text>
      <Text style={{ fontFamily: 'TwinkleStar', fontSize: 18, marginTop: 10, marginLeft: 15 }}>
        Make a striking first impression. Let your profile radiate expertise, passion, and uniqueness.
      </Text>
      <View>
        <Text style={tw` mt-7 ml-8 font-semibold text-[15px]`}>Your Professional Role</Text>
        {/*input */}
        <TextInput
          value={value}
          onChangeText={(text) => {
            setValue(text);
          }}
          placeholder='Software Engineer | Full Stack Developer'
          style={tw`w-10/12 mt-3  mx-auto border border-b-1 rounded-xl p-2 border-gray-200`}
        />
      </View>
      <View style={tw`mt-10 w-11/12 mx-auto border border-gray-300 rounded-xl p-4 `}>
        <Text style={[tw`text-2xl`, { fontFamily: 'MadimiOne' }]}>Linked accounts</Text>
        <View style={tw`w-full border border-gray-300 mt-7 p-2 rounded-3xl flex flex-row items-center`}>
          <FontAwesome5 name="github" size={22} color="black" style={tw` mr-2 ml-[37%]`} />
          <TouchableOpacity  >
            <Text style={tw`text-xl  font-bold`}>Github</Text>
          </TouchableOpacity>
        </View>
        {/* LinkedIn section */}
        <View style={tw`w-full border border-gray-300 mt-7 p-2 rounded-3xl flex flex-row items-center `}>
          <FontAwesome5 name="linkedin" size={22} color="black" style={tw` mr-2 ml-[37%]`} />
          <TouchableOpacity  >
            <Text style={tw`text-xl  font-bold`}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
       <Footer button1Text="Back" button2Text="Add Professional Bio" reducerName={updateProfessionalRole} data={value} navigate="Skill" />
    </View>
  );
};

export default ProfessionalRole;
