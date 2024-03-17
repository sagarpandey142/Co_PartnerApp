import React from 'react'
import { Text, View ,TextInput} from 'react-native'
import Navbar from '../Common/Navbar'
import { useFonts } from 'expo-font';
import tw from "twrnc"
import Footer from '../Common/Footer';



const UserBio = () => {

    const [fontsLoaded] = useFonts({
        MadimiOne:require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
        TwinkleStar:require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
      });
    
      if (!fontsLoaded) {
        return null; 
      }

  return (
   <View style={tw`  h-[100%] `}>
      <Navbar/>
       <View>
            <Text style={{ fontFamily: 'MadimiOne', fontSize:  28,marginLeft: 15,marginTop:20}}>
            Craft a concise, engaging bio showcasing your professional journey succinctly.
            </Text>
            <Text style={{fontFamily:"TwinkleStar",fontSize:18,marginTop:10,marginLeft:15}} >
            Compose a compelling professional biography, where your journey unfolds through eloquent prose. Infuse passion, expertise, and purpose into each word,
            </Text>
            <View>
               
                {/*input */}
                <TextInput
                 multiline
                 lineHeight={50} 
                numberOfLines={8}
                placeholder='Please share your skills and experiences, highlighting key achievements and expertise relevant to your profession.'
                style={tw`w-10/12 mt-6  min-h-[10rem]     ml-2 border border-b-1 rounded-xl p-3 border-gray-200`}
                />
                
            </View>
       </View>
        <Footer button1Text="Back" button2Text="Add Your Skills"></Footer>
   </View>
  )
}

export default UserBio