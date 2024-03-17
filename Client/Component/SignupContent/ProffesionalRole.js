import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet ,TextInput} from 'react-native';
import tw from 'twrnc';
import Navbar from '../Common/Navbar';
import {FontMadimi} from "../Fonts/FetchFonts"
import {fontNuecha} from "../Fonts/FetchFonts"
import { AppLoading } from 'expo-app-loading';
import Footer from '../Common/Footer';



const ProfessionalRole = () => {
   
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await FontMadimi;
      await fontNuecha;
      setDataLoaded(true);
    };

    loadData();
  }, []);
    if(!dataLoaded){
       <AppLoading/>
    }
 


  return (
    <View style={tw`h-full w-full `}>
      <Navbar />
      <Text style={{ fontFamily: 'madimi-one', fontSize:  28,marginLeft: 15,marginTop:20}}>
        Craft your professional identity with precision and flair.
      </Text>
      <Text style={{fontFamily:"Neucha",fontSize:18,marginTop:10,marginLeft:15}} >
        Make a striking first impression. Let your profile radiate expertise, passion, and uniqueness.
      </Text>
      <View>
        <Text style={tw` mt-7 ml-8 font-semibold text-[15px]`}>Your Professional Role</Text>
        {/*input */}
        <TextInput
          placeholder='Software Engineer | Full Stack Developer'
          style={tw`w-10/12 mt-3  mx-auto border border-b-1 rounded-xl p-2 border-gray-200`}
        />
        
      </View>
       <Footer button1Text="Back" button2Text="Add Skills"/>
    </View>
  );
};



export default ProfessionalRole;
