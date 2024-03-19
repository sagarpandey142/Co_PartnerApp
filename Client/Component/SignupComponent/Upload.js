import React, { useState } from 'react';
import tw from 'twrnc'
import { Link } from '@react-navigation/native';
import { Button, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
// import FilePickerManager from 'react-native-file-picker';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';


const Upload = () => {
  const [fontsLoaded] = useFonts({
    MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  

 
  const handleUpload = async () => {
    // try {
    //   const res = await FilePickerManager.pick(); 
    //   console.log('File picked:', res);
    //   // Handle the picked file
    // } catch (err) {
    //   console.log('Error occurred:', err);
    // }
  };
  
  return (
    <View style={tw`flex justify-center items-center flex-col gap-y-5`}>
        <Navbar/>
        <Text style={[tw`text-3xl max-w-[90%]`,{fontFamily: 'MadimiOne'}]}>How do you like to tell us about yourself ?</Text>
        <Text style={[tw`max-w-[90%] font-semibold text-base`]}>We need to get a sense of you education, experience and skills. It's quickest to import your application - you can edit it before your profile goes live.</Text>
        <TouchableOpacity>
          <Text style={tw`text-green-600 underline text-base font-bold`}>How can a profile make me stand out?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`border border-green-600 border-solid border-2 px-20 py-2 rounded-3xl `} onPress={handleUpload}>
          <Text style={tw`text-green-600 font-bold mx-auto text-base`}>Upload your resume</Text>
        </TouchableOpacity>
        <Footer button1Text="Back" button2Text="Continue to Add Skills"/>
    </View>
  )
}

export default Upload