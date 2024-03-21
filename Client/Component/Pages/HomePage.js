import React from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"
import MainHeader from '../Common/MainHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomePage = () => {

    const Successarray=[
        {name:"All"},
        {name:"Design & Creative"},
        {name:"Work & Career"}
    ]

  return (
    <View style={tw` w-[100%] h-[100%] bg-white `} >
         <View style={tw` w-11/12 mx-auto`}>
            <MainHeader mainName="CoPartner" nameHeader="" icon1=""  icon2 ="notifications"/>
            <Text >All Success stories</Text>
            {
                Successarray.map((data,index)=>(
                    <TouchableOpacity style={tw``}>
                        <Text>{data.name}</Text>
                    </TouchableOpacity>
                ))
            }
         </View>
    </View>
  )
}

export default HomePage