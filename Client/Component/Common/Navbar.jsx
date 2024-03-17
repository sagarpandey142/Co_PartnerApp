import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"

const Navbar = () => {
  return (
     <View style={tw`border-gray-200 border-b-2 p-3 mt-9 flex flex-row w-full border-b-1 `}>
           <Text style={tw`mx-auto  font-semibold text-xl`}>Create Your Profile</Text>
            <TouchableOpacity>
               <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
     </View>
  )
}

export default Navbar