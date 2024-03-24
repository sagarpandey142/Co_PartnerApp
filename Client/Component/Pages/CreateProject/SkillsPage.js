import React, { useState } from 'react'
import { View ,Text,Image,TouchableOpacity} from 'react-native'
import image1 from "../../../assets/circle-star.png"
import tw from "twrnc"
import { useFonts } from 'expo-font'
import {  useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Common/Navbar'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import SkillButton from '../../Common/SkillButton'
import { SkillRequired } from '../../../ArrayUsable/SkillsRequired'
import { updateSkill } from '../../../reducers/signupReducer'
import { updateStep } from '../../../reducers/CreateProject'


const SkillsPage = () => {
    const{step,title}=useSelector((state)=>state.createProject);
    const [skillInput, setSkillInput] = useState("");
    const[selectedButton,setSelectedButton]=useState([])
    const dispatch=useDispatch();
    const [fontsLoaded] = useFonts({
        MadimiOne: require('../../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf'),
        TwinkleStar: require('../../../assets/Fonts/-W_oXI_oSymQ8Qj-Apx3HGN_Hu1RTCk5FtSDETgf0cK_NOeFgpRt9rN5.ttf'),
      });

      async function setSkillState(){
           useDispatch(updateStep(3));
           useDispatch(updateSkill(selectedButton));
      }
  return (
    <View style={tw` h-[100%]`}>
     <Navbar/>
       <View style={tw` w-11/12 mx-auto mt-6`}>
        <View style={tw` flex flex-row  gap-4 mt-6 ml-2`}>
                    <Text style={tw` text-slate-500`}>{step}/5</Text>
                    <Text style={[tw` text-md`,{fontFamily:"MadimiOne"}]}>Job Post</Text>
        </View>
        <Text style={[tw` mt-7 text-3xl  `,{fontFamily:"MadimiOne"}]}>What are the main Skills required for your work?</Text>
        <TextInput
          value={skillInput}
          onChangeText={(text) => setSkillInput(text)} 
          onSubmitEditing={(event) => {
            const skill = event.nativeEvent.text;
            if (skill.trim() !== "") {
              setSelectedButton((prevSelectedSkills) => [...prevSelectedSkills, skill]);
              setSkillInput('')
            }}}
            placeholder="Search or add up to 10 skills"
            style={tw` mt-4 w-11/12  border border-b-1 rounded-md p-2 border-gray-300`}
        />
        <View style={tw` flex flex-row gap-2 items-center mt-4 `}>
            <Image source={image1} style={{color:"gray", height: 18,width:18 }} />
             <Text style={tw` text-slate-500`}>For The Bet Results, add 2-5 Skills</Text>
        </View>
        {
           selectedButton.length>0 && (
             <View >
                  <Text style={[tw` mt-7 text-xl  `,{fontFamily:"MadimiOne"}]}>Your Selected Skill</Text>
                  <ScrollView>
                          <View style={tw` flex flex-row max-w-[97%] gap-1  flex-wrap`}>
                               {
                                 selectedButton.map((data,index)=>(
                                    <SkillButton key={index} text={data}  flag="true" />
                                 ))
                               }
                          </View>
                  </ScrollView>
             </View>
           )
         }
        <Text style={[tw` mt-7 text-xl  `,{fontFamily:"MadimiOne"}]}>Popular Skill For Full Stack Developer </Text>
         <ScrollView>
          <View style={tw` flex flex-row max-w-[97%] gap-1  flex-wrap`}>
              {
                SkillRequired.map((data,index)=>(
                    <SkillButton key={index} text={data.name}  setSelectedButton={setSelectedButton}  selectedButton={selectedButton} />
                ))
              }
          </View>
         </ScrollView>
       </View>
       <View style={{marginTop:70, borderTopWidth: 1, borderTopColor: '#E5E7EB',padding:10,display:'flex',flexDirection:'row', justifyContent:'space-between' }}>
            <TouchableOpacity>
                 <Text style={tw` border border-gray-300 p-2 rounded-full px-5`}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={setSkillState}>
                 <Text style={tw` bg-green-600 p-3 px-6 rounded-full text-white font-bold`}>Next:Scope</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SkillsPage