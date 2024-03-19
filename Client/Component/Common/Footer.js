import React from 'react'
import { View ,Text, TouchableOpacity} from 'react-native'
import tw from 'twrnc'
import {useDispatch} from "react-redux"
import { useNavigation } from '@react-navigation/native'

const Footer = ({button1Text,button2Text,reducerName,data,navigate}) => {
  const dispatch= useDispatch();
  const navigation=useNavigation();
  async function handlePress(){
      dispatch(reducerName(data));
      navigation?.navigate(navigate)
  }
  return (
    <View style={tw` flex-1 justify-end `}>
        <View style={{ borderTopWidth: 1, borderTopColor: '#E5E7EB',padding:17,display:'flex',flexDirection:'row', justifyContent:'space-between' }}>
            <TouchableOpacity>
                 <Text style={tw` border border-gray-300 p-2 rounded-full px-5`}>{button1Text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                 <Text style={tw` bg-green-600 p-3 px-6 rounded-full text-white font-bold`}>{button2Text}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Footer