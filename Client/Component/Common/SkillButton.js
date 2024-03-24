import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from "twrnc";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SkillButton = ({ text, setSelectedButton, selectedButton, flag }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    if (isSelected) {
      setSelectedButton((prevSelectedSkills) => prevSelectedSkills.filter(skill => skill !== text));
    } else {
      setSelectedButton((prevSelectedSkills) => [...prevSelectedSkills, text]);
    }
   
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        tw`border-2 border-gray-300 gap-3 text-green-600 px-4 py-1 rounded-full flex items-center mt-4`,
        isSelected ? { backgroundColor: '', color: 'white', fontWeight: 'bold' } : {}, 
        { alignSelf: 'flex-start', flexDirection: 'row' }
      ]}
    >
      <Text style={tw`text-green-700 font-bold text-[15px]`}>{text}</Text>
      {flag ? (
        <MaterialIcons name="cancel" size={19} color="#15803d" />
      ) : (
        <AntDesign name="pluscircle" size={19} color="#15803d" />
      )}
    </TouchableOpacity>
  );
};

export default SkillButton;
