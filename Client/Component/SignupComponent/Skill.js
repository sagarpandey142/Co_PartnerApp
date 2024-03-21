import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { updateSkill } from '../../reducers/signupReducer';
import tw from 'twrnc';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';



const availableSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Java",
  "Swift",
  "C++",
  "SQL",
  "Git",
  "AWS"
];


const Skill = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [typedSkills, setTypedSkills] = useState('');
  const [allSkills, setAllSkills] = useState([]);
  const dispatch = useDispatch();
  const res = useSelector((state)=>state.signup);

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      removeSkill(skill);
    } else {
      if (selectedSkills.length < 12) {
        setSelectedSkills([...selectedSkills, skill]);
      }
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(selectedSkill => selectedSkill !== skill));
  };

  const handleChangeText = (text) => {
    setTypedSkills(text);
  };

  const handleAddSkill = () => {
    if (typedSkills.trim() !== '') {
      setAllSkills([...allSkills, typedSkills]);
      setTypedSkills('');
    }
  };

  const [fontsLoaded] = useFonts({
    MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      handleAddSkill();
    }
  };

  const handleDispatchSkill = () => {
    console.log("first")
    dispatch(updateSkill(selectedSkills));
    console.log("selected",selectedSkills)
  };
  
  return (
    <View>
      <Navbar />
      <Text style={[tw` mt-4 mx-auto text-3xl`,{fontFamily:'MadimiOne'}]}>Nearly there! What work are you here to do?</Text>
      <Text style={[tw`mt-4 mx-auto text-base`,{fontFamily:'TwinkleStar'}]}>Your skills show what you can offer, and help us choose which one to recommend to you. Add or remove the ones we have suggested, or start typing to pick more. It's up to you.</Text>
      <Text style={[tw`ml-3 text-base mt-6`,{fontFamily:'MadimiOne'}]}>Your Skills</Text>
      <View style={tw`mx-2 my-2 flex-row`}>
        <TextInput
            value={typedSkills}
            onChangeText={handleChangeText}
            onKeyPress={handleKeyPress}
            style={tw`w-11/12 mt-3 mx-auto border border-b-1 rounded-xl p-2 border-gray-200`}
            placeholder="Type your skill"
        />
        </View>

        {/* <TextInput
        style={[tw`border border-gray-400 px-4 py-2 m-4 rounded-lg`, {
            backgroundColor: selectedSkills.length > 0 ? '#E5E7EB' : 'transparent',
        }]}
        placeholder='Your skills will be visible here'
        value={selectedSkills.concat(allSkills).join(', ')} 
        onChangeText={handleChangeText}
        /> */}

 <Text style={[tw`ml-3 text-base mt-6 pb-4`,{fontFamily:'MadimiOne'}]}>Your All Skills</Text>
<View style={tw`flex flex-row flex-wrap items-center`}>
  {availableSkills.map((skill, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => toggleSkill(skill)}
      style={[tw`mx-2 my-2 rounded-full`, {
        backgroundColor: selectedSkills.includes(skill) ? '#bfdbfe' : 'transparent',
      }]}
    >
      <Text style={tw`text-gray-500 border border-gray-400 rounded-full p-2 px-3   flex flex-row  items-center`}>
        {skill}
        {selectedSkills.includes(skill) && (
          <Icon name="times-circle" size={20} color="gray" style={tw``} />
        )}
        {!selectedSkills.includes(skill) && (
          <Icon name="plus-circle" size={20} color="gray" style={tw``} />
        )}
      </Text>
    </TouchableOpacity>
  ))}
</View>

        <Footer
            button1Text="Back"
            button2Text="One Last Step"
            reducerName={updateSkill} 
            data={selectedSkills} 
            navigate="userBio" 
        />

    </View>
  );
};

export default Skill;
