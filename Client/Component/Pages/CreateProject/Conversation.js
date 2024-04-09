import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, Platform ,ToastAndroid} from 'react-native';
import { useSelector } from 'react-redux';
import tw from "twrnc";
import Navbar from '../../Common/Navbar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-picker';
import {createProjectHandler} from '../../../services/operations/ProjectsHandler';
import { useNavigation } from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DecodedTokenHandler} from "../../../services/operations/generate&verifyOTP"
import Spinner from 'react-native-loading-spinner-overlay';



const Conversation = () => {
  const { step ,title,skills,BasicDetail} = useSelector((state) => state.createProject);
  const [description, setDescription] = useState('');
  const[loading,setLoading]=useState(false);
  const Navigate=useNavigation();
  const maxLength = 150;

  const handleDescriptionChange = (text) => {
    if (text.length <= maxLength) {
      setDescription(text);
    }
  };

  const charactersLeft = maxLength - description.length;

  const handleAttachFile = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
      } else {
        console.log('Selected image:', response);
        Alert.alert('Image Selected', `Image ${response.fileName} has been selected`);
      }
    });
  };
 
  async function PostAJob(){
    if(!description){
      ToastAndroid.showWithGravity(
        'All Field Required',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return;
    }
    const allKeys = await AsyncStorage.getAllKeys();

    const allItems = await AsyncStorage.multiGet(allKeys);
    const token = allItems[0][1]; 
    setLoading(true)
    const decodedEmail=await DecodedTokenHandler(token);
      const data={
         Email:decodedEmail.data.Email,
         projectName:title,
         BasicDetail,
         Skill:skills,
         projectDescription:description
      }
     const response=await createProjectHandler(data);
     setLoading(false)
      Navigate.navigate("JobPage")
  }
  return (
    <View>
      <Navbar />

      <ScrollView vertical style={tw`w-11/12 mx-auto mt-6 h-[77%]`}>
        {/* Content here */}
        <View style={tw`flex flex-row gap-4 mt-6 ml-2`}>
          <Text style={tw`text-slate-500`}>{step}/5</Text>
          <Text style={[tw`text-md`, { fontFamily: "MadimiOne" }]}>Job Post</Text>
        </View>

        <Text style={[tw`mt-7 text-2xl`, { fontFamily: "MadimiOne" }]}>Begin the conversation.</Text>
        <Text style={tw`mt-4 text-lg`}>What talents are you seeking:</Text>
        <Text style={tw`mt-2 ml-2 text-[15px]`}>
          <Text style={tw`text-xl font-bold`}>·</Text> Be clear about what you need to be done.
        </Text>
        <Text style={tw`mt-2 ml-2 text-[15px]`}>
          <Text style={tw`text-xl font-bold `}>·</Text>What abilities individuals are after:
        </Text>
        <Text style={tw`mt-2 ml-2 text-[15px]`}>
          <Text style={tw`text-xl font-bold`}>·</Text>Provide clear expectations for your tasks or objectives.
        </Text>
        <Text style={[tw`mt-7 text-xl`, { fontFamily: "MadimiOne" }]}>Describe what you need</Text>
         {/*spinner*/}
         <Spinner visible={loading}/>
        <TextInput
          multiline
          numberOfLines={13}
          placeholder='Already have a description? Paste it here!'
          style={tw`border-2 border-gray-300 rounded-xl mt-3 p-3`}
          textAlignVertical="top"
          onChangeText={handleDescriptionChange}
          value={description}
          maxLength={maxLength}
        />
        <Text style={[tw`text-red-700 text-right`, { fontFamily: "MadimiOne" }]}>{charactersLeft} character's left</Text>
        {/* <TouchableOpacity style={tw`mt-6 w-[40%] p-2 items-center border-2 border-green-700 rounded-full flex flex-row`} onPress={handleAttachFile}>
          <Ionicons name="attach" size={24} color="#15803d" style={tw``} />
          <Text style={tw`mx-auto text-green-700 font-semibold`}>Attach File</Text>
        </TouchableOpacity>
        <Text style={[tw`text-red-700 mt-2`,{ fontFamily: "MadimiOne" }]}>Max File Size 50 Mb</Text> */}
      </ScrollView>
      <View style={{ borderTopWidth: 1, borderTopColor: '#E5E7EB',padding:10,display:'flex',flexDirection:'row', justifyContent:'space-between' }}>
            <TouchableOpacity>
                 <Text style={tw` border border-gray-300 p-2 rounded-full px-5`}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={PostAJob} >
                 <Text style={tw` bg-green-600 p-3 px-6 rounded-full text-white font-bold`}>Post A Job</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Conversation;
