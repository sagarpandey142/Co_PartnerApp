import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"

const Navbar = ({header}) => {
  return (
      <View style={[tw`border-gray-200 border-b-[3px]  p-4  flex flex-row  w-full mt-3`, ]}>
         <Text style={[tw`mx-auto flex font-semibold text-xl  mt-3  `,{ }]}>{
           header ? (
               <Text>{header}</Text>
            ) : (
               <Text>Create Your Profile</Text>
            )
         }</Text>
         <TouchableOpacity style={tw` mt-3`}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
         </TouchableOpacity>
     </View>

  )
}

export default Navbar