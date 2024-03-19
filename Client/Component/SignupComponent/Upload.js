import React, { useState } from 'react';
import tw from 'twrnc'
import { Link } from '@react-navigation/native';
import { Button, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import  DocumentPicker  from 'react-native-document-picker';


const Upload = () => {
  const [fontsLoaded] = useFonts({
    MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  const HorizontalLine = ({ color, height, margin }) => (
    <View
      style={{
        borderBottomColor: color || '#E5E7EB', 
        borderBottomWidth: 1, 
        height: height || 1,
        marginVertical: margin || 8,
      }}
    />
  );

  const handleUpload = async () => {
    console.log("first")
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf], // Specify the types of files you want to allow (e.g., PDF, images, etc.)
      });
      console.log('File picked:', res);
      // Here you can handle the file upload, for example, send it to a server
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
        console.log('User canceled the picker');
      } else {
        // An error occurred
        console.log('Error occurred:', err);
      }
    }
  };
  
  return (
    <View style={tw`flex justify-center items-center flex-col gap-y-5`}>
        <Text style={tw`font-bold, text-xl pt-10 font-bold`}>Create Your Profile</Text>
        <HorizontalLine color="gray" height={1} margin={8} />
        <Text style={[tw`text-3xl max-w-[90%]`,{fontFamily: 'MadimiOne'}]}>How do you like to tell us about yourself ?</Text>
        <Text style={[tw`max-w-[90%] font-semibold text-base`]}>We need to get a sense of you education, experience and skills. It's quickest to import your application - you can edit it before your profile goes live.</Text>
        <TouchableOpacity>
          <Text style={tw`text-green-600 underline text-base font-bold`}>How can a profile make me stand out?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`border border-green-600 border-solid border-2 px-20 py-2 rounded-3xl `} onPress={handleUpload}>
          <Text style={tw`text-green-600 font-bold mx-auto text-base`}>Upload your resume</Text>
        </TouchableOpacity>
        <View style={tw`flex flex-row pt-60`}>
            <TouchableOpacity style={tw`border border-gray-200 border-solid border-2 px-4 py-2 rounded-3xl ml-6`}>
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-green-600 px-8 py-2 rounded-3xl `}>
              <Text style={tw`text-white text-base font-semibold mx-auto`}>Continue editing your profile</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Upload