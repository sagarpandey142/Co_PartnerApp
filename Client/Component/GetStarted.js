import React from 'react'
import { View ,ImageBackground,Text, Button,TouchableOpacity} from 'react-native'
import tw from 'twrnc'
import office from "../assets/office1.jpg"

const GetStarted = () => {
  return (
         <ImageBackground source={office}  style={tw`flex-1  `}>
                 <View style={[tw`flex-1  gap-2 w-11/12 mx-auto justify-end p-3`, { paddingBottom: 100 }]}>
                    <Text style={tw` flex text-[32px]  text-white font-poppin`}>Hey People
                     Welcome to <Text style={tw`text-[#AAFF9E]`}>CoPartner</Text></Text>
                    <Text style={tw`text-slate-100 text-lg max-w-[98%]`}>Forgot the old rules. You can have the bet People Right Now . Right here</Text>
                    <TouchableOpacity style={[tw`bg-[#AAFF9E] p-5 rounded-full`, { transform: [{ translateY: 15 }] }]}>
                        <Text style={tw`text-black mx-auto font-semibold`}>Get Started</Text>
                    </TouchableOpacity>
                 </View>
         </ImageBackground>
  )
}

export default GetStarted