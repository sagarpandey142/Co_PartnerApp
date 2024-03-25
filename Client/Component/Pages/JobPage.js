import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MainHeader from '../Common/MainHeader';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProjectsHandler } from '../../services/operations/ProjectsHandler'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import { updateDesc } from '../../reducers/signupReducer';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const JobPage = () => {

  const [myFeed, setMyFeed] = useState(true);
  const [matches, setMatches] = useState(false);
  const [recent, setRecent] = useState(false);
  const [state, setState] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  

  const toggleMyFeed = () => {
    setMyFeed(!myFeed);
    setMatches(false);
    setRecent(false);
  };

  const toggleMatches = () => {
    setMatches(!matches);
    setMyFeed(false);
    setRecent(false);
  };

  const toggleRecent = () => {
    setRecent(!recent);
    setMatches(false);
    setMyFeed(false);
  };

  const toggleDescription = (projectName,projectDescription,skill) => {
    dispatch(updateDesc({ projectName, projectDescription, skill }));
    navigation.navigate('JobDesc');
  };

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const func = async () => {
    const variable = await ProjectsHandler();
    console.log('yeee', variable?.data?.projects[7]?.Skill.length);
    setState(variable?.data?.projects);
    console.log('state', state);
  };

  useEffect(() => {
    func();
  }, []);

  useEffect(() => {
    console.log('Updated state:', state);
  }, [state]);

  const [fontsLoaded] = useFonts({
    MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
  });   
  const handleDesc = (projectName, projectDescription, Skill) =>{
    console.log("name", projectName, projectDescription, Skill)
    dispatch(updateDesc({ projectName, projectDescription, Skill }));
    navigation.navigate('JobDesc');
  }


  return (
    <View style={[tw`bg-white`]}>
      <MainHeader mainName="CoPartner" nameHeader="" icon1="" icon2="notifications" />
      <ScrollView>
        <View>
          <View style={[tw`flex flex-row  w-11/12 mx-auto justify-between`, {}]}>
             <TextInput placeholder='       Search for jobs' style={tw` border-[2px] border-gray-300 p-2 rounded-full w-[80%]`}/>
            <MaterialCommunityIcons name="heart-circle-outline" size={24} color="black" style={[tw`flex items-center text-5xl text-green-600`, {}]} />
          </View>
          <View style={[tw`mx-4 mt-5`]} />
         
          <View style={[tw`flex border-b-2 border-gray-200  flex-row gap-5 mx-auto mt-3 p-3`, {}]}>
            <TouchableOpacity onPress={toggleMyFeed} style={[myFeed && tw`border-b-2 border-green-700`]}>
              <Text style={[tw`text-lg text-gray-400 font-semibold pb-1`, myFeed && tw`text-semibold text-green-600`]}>{'My Feed'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMatches} style={[matches && tw`border-b-2 border-green-700`]}>
              <Text style={[tw`text-lg font-semibold text-gray-400 pb-1`, matches && tw`text-green-600 font-semibold`]}>{'Saved Jobs'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleRecent} style={[recent && tw`border-b-2 border-green-700`]}>
              <Text style={[tw`text-lg font-semibold text-gray-400 pb-1`, recent && tw`text-green-600 font-semibold`]}>{'Most Recent'}</Text>
            </TouchableOpacity>
          </View>
          {myFeed && (
            <View style={[tw`mt-2 pl-4 flex flex-row justify-between mb-20`, { width: '100%' }]}>

              <View style={[tw` p-3`]}>
                {state?.map((project, index) => (
                    <View key={index} style={tw`  w-[100%] mt-3 pb-6  border-b-2 border-gray-200 `}>
                    <TouchableOpacity onPress={() => handleDesc(project.projectName, project.projectDescription,project.Skill)}>
                    <Text style={[tw`text-slate-700 text-xs`]}>Posted 59 mins ago</Text>
                         <View style={tw`  flex flex-row justify-between `}>
                            <Text style={[tw`text-lg font-bold text-[#334155]`]}>{project.projectName}</Text>
                            <View style={tw` flex flex-row gap-4 `}>
                             <Feather name="thumbs-down" size={24} color="#15803d" />
                                <AntDesign name="hearto" size={24} color="#15803d" />
                            </View>
                         </View>
                        <Text style={[tw`pt-3 text-gray-500`]}>Fixed price - intermediate - Est,Budget: $50</Text>
                     </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDesc(project.projectName, project.projectDescription,project.Skill)}>
                            <Text numberOfLines={expandedDescriptions[index] ? undefined : 2} style={[tw`text-base text-[#020617] pt-5`, {}]}>
                              {project.projectDescription}
                            </Text>
                        </TouchableOpacity>
                        {project.projectDescription.length > 100 && (
                        <TouchableOpacity onPress={() => toggleDescription(project.projectName,project.projectDescription,project.Skill)}>
                            <Text style={[tw`text-green-700 underline font-semibold mt-1`]}>{expandedDescriptions[index] ? 'Read Less' : 'Read More'}</Text>
                        </TouchableOpacity>
                        )}
                        <View style={[tw`flex flex-row gap-3 mt-6 mb-6 flex-wrap`, {}]}>
                            {project.Skill &&
                                (showAllSkills ? (
                                project.Skill.map((skill, skillIndex) => (
                                    
                                    <TouchableOpacity key={skillIndex}
                                          style={[
                                            tw` bg-gray-300 gap-3 text-[#e2e8f0] px-5 py-1 rounded-full flex items-center mt-4`
                                          ]}
                                        >{skill}
                                        </TouchableOpacity>
                                    
                                ))
                                ) : (
                                project.Skill.slice(0, 3).map((skill, skillIndex) => (
                                    <View key={skillIndex} style={[tw`flex flex-row items-center`]}>
                                    <Text style={[tw`bg-gray-200 rounded-full px-3 py-2`]}>
                                        {skill}
                                    </Text>
                                    </View>
                                ))
                                ))}
                            {project.Skill?.length > 3 && (
                                <TouchableOpacity onPress={toggleShowAllSkills} style={[tw`flex flex-row items-center`]}>
                                <AntDesign name={showAllSkills ? "upcircleo" : "downcircleo"} size={24} color="black" />
                                </TouchableOpacity>
                            )}
                        </View>
                            <View style={[tw`flex flex-row items-center gap-4`, {}]}>
                                 <View style={tw`flex flex-row items-center`}>                         
                                    <MaterialIcons name="verified-user" size={24} color="black" style={[tw`flex items-center mr-2 text-slate-500 text-base`]}/>
                                    <Text style={[tw`text-gray-500 font-semibold`]}>User Verified</Text>
                                 </View>
                                <Text style={tw` text-lg text-slate-500 flex items-center`}>
                                <Entypo name="location-pin" size={24} color="black" style={[tw`flex items-center mr-2 text-slate-500 text-lg`]} />
                                  <Text style={[tw`text-gray-500 font-semibold`]}>India</Text>
                                </Text>
                            </View>
                           
                          
                        </View>
                ))}
              </View>


              
            </View>
          )}
          {matches && <View style={[tw`border border-gray-300 mx-4 mt-2 p-4`, {}]}>{'matches'}</View>}
          {recent && <View style={[tw`border border-gray-300 mx-4 mt-2 p-4`, {}]}>{'recent'}</View>}
        </View>
      </ScrollView>
    </View>
  );
};

export default JobPage;
