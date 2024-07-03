import React from 'react'
import { View } from 'native-base'
import image1 from "../../assets/logo.jpg";


const InBuiltLoading = () => {
  return (
    <View style={tw` h-[100%] w-[100%] items-center justify-center bg-white`}>
       <Image source={image1} />
  </View>
  )
}

export default InBuiltLoading