import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import tw from "twrnc"
import Navbar from '../../Common/Navbar'

const Conversation = () => {

    const{step}=useSelector((state)=>state.createProject)
  return (
   <View >
     <Navbar/>
      <View style={tw` w-11/12 mx-auto mt-6`}>
            <View style={tw` flex flex-row  gap-4 mt-6 ml-2`}>
                            <Text style={tw` text-slate-500`}>{step}/5</Text>
                            <Text style={[tw` text-md`,{fontFamily:"MadimiOne"}]}>Job Post</Text>
             </View>

             <Text style={[tw` mt-7 text-2xl  `,{fontFamily:"MadimiOne"}]}>Begin the conversation.</Text>
             <Text style={tw` mt-4 text-lg`}>What talents are seeking:</Text>
             <Text style={tw` mt-2 ml-2 text-[15px]`}><Text style={tw` text-xl font-bold`}>·</Text> Be clear about what you need to be done.</Text>
             <Text style={tw` mt-2 ml-2 text-[15px]`}> <Text style={tw` text-xl font-bold `}>·</Text>What abilities individuals are after:</Text>
             <Text style={tw` mt-2 ml-2 text-[15px]`}> <Text style={tw` text-xl font-bold`}>·</Text>Provide clear expectations for your tasks or objectives.</Text>
      </View>

   </View>
  )
}

export default Conversation