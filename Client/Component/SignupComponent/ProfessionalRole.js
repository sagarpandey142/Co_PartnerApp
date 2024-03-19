import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet ,TextInput} from 'react-native';
import tw from 'twrnc';
import Navbar from '../Common/Navbar';
import {FontMadimi} from "../Fonts/FetchFonts"
import {fontNuecha} from "../Fonts/FetchFonts"
import { AppLoading } from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Footer from '../Common/Footer';
import { updateProfessionalDes,updateProfessionalRole } from '../../reducers/professionalRole';


const ProfessionalRole = () => {
  const[value,SetValue]=useState()
  console.log("value",value)
  const [fontsLoaded] = useFonts({
    MadimiOne:require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    TwinkleStar:require("../../assets/Fonts/pe0pMI6IL4dPoFl9LGEmY6WaA_Rue1UwVg.ttf")
  });

  if (!fontsLoaded) {
    return null; 
  }


  return (
    <View style={tw`h-full w-full bg-white `}>
      <Navbar />
      <Text style={[tw``,{ marginTop:10,fontFamily: 'MadimiOne', fontSize:  28,marginLeft: 15,marginTop:20}]}>
        Craft your professional identity with precision and flair.
      </Text>
      <Text style={{fontFamily:"TwinkleStar",fontSize:18,marginTop:10,marginLeft:15}} >
        Make a striking first impression. Let your profile radiate expertise, passion, and uniqueness.
      </Text>
      <View>
        <Text style={tw` mt-7 ml-8 font-semibold text-[15px]`}>Your Professional Role</Text>
        {/*input */}
        <TextInput
          value={value}
          onChangeText={(text)=>{
            SetValue({...value,text})
          }}
          placeholder='Software Engineer | Full Stack Developer'
          style={tw`w-10/12 mt-3  mx-auto border border-b-1 rounded-xl p-2 border-gray-200`}
        />
        
      </View>
       <Footer button1Text="Back" button2Text="Add Professional Bio" reducerName={updateProfessionalRole} data={value} navigate="userBio"/>
    </View>
  );
};



export default ProfessionalRole;
