import React, { useState } from 'react'
import { Text, View ,TextInput,Image} from 'react-native'
import Navbar from '../Common/Navbar'
import { useFonts } from 'expo-font';
import tw from "twrnc"
import Footer from '../Common/Footer';
import image from "../../assets/userImage.png"
import { ScrollView } from 'react-native-gesture-handler';
import { updateProfessionalDes,updateProfessionalRole } from '../../reducers/professionalRole';



const UserBio = () => {
   const[value,setValue]=useState();
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
      <ScrollView>
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
                  value={value}
                  onChangeText={(text)=>{
                  setValue({...value,text})
                }}
                  multiline
                  lineHeight={50} 
                  numberOfLines={8}
                  placeholder='Please share your skills and experiences, highlighting key achievements and expertise relevant to your profession.'
                  style={tw`w-10/12 mt-6  min-h-[10rem]     ml-2 border border-b-1 rounded-xl p-3 border-gray-200`}
                  textAlignVertical="top"
                  />
                  
              </View>
        </View>
          <View style={tw`mt-20 border border-gray-300 rounded-2xl w-11/12 mx-auto flex  gap-5 p-2`}>
                <View>
                  <Image source={image} style={[tw` mt-7 mx-auto rounded-full`,{ width: 130, height: 130 }]}/>
                  <Text style={[tw`font-MadimiOne mx-auto text-xl mt-2`,{fontFamily:'MadimiOne'}]}>Dimitri P.</Text>
                  <Text style={[tw` text-lg mx-auto `,{fontFamily:'MadimiOne '}]}>Full Stack developer</Text>
                </View>
                <View >
                    <Text style={[tw` max-w-[98%] text-[17px] mx-auto`,{fontFamily:'TwinkleStar'}]}>As a proficient MERN stack developer, I specialize in building dynamic web applications leveraging MongoDB for flexible data storage, Express.js for seamless server-side operations, React.js for engaging user interfaces, and Node.js for efficient backend functionality.</Text>
                    <View >
                      <Text style={[tw`mx-auto mt-4 text-[16px] ml-3`,{fontFamily:'TwinkleStar'}]}>&#8226; I excel in leveraging MongoDB for flexible data storage.</Text>
                      <Text style={[tw`mx-auto mt-3 text-[16px] ml-3`,{fontFamily:'TwinkleStar'}]}>&#8226; I employ Express.js for seamless server-side operations.</Text>
                      <Text style={[tw`mx-auto mt-3 text-[16px]  ml-3`,{fontFamily:'TwinkleStar'}]}>&#8226; I create engaging user interfaces with React.js.</Text>
                      <Text style={[tw`mx-auto mt-3 text-[16px] ml-3`,{fontFamily:'TwinkleStar'}]}>&#8226; I ensure efficient backend functionality using Node.js.</Text>
                    </View>
                  </View>
        
          </View>
          <Footer button1Text="Back" button2Text="One Last Step" reducerName={updateProfessionalDes} data={value} navigate="userBio"/>
       </ScrollView>
    </View>
  
  )
}

export default UserBio