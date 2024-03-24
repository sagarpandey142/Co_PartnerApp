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


const JobPage = () => {

  const [myFeed, setMyFeed] = useState(true);
  const [matches, setMatches] = useState(false);
  const [recent, setRecent] = useState(false);
  const [state, setState] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [showAllSkills, setShowAllSkills] = useState(false);
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

  const toggleDescription = (index) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const func = async () => {
    console.log('nhi aya');
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
          <View style={[tw`flex flex-row mx-auto`, {}]}>
            <View style={[tw`flex flex-row items-center border border-gray-300 rounded-full h-10 px-25 mr-4`, {}]}>
              <AntDesign name="search1" size={24} color="black" style={[tw`mr-2`]} />
              <TextInput placeholder="Search for jobs" style={[tw`flex-1`, {}]} />
            </View>
            <MaterialCommunityIcons name="heart-circle-outline" size={24} color="black" style={[tw`flex items-center text-5xl text-green-600`, {}]} />
          </View>
          <View style={[tw`mx-4 mt-5`]} />
         
          <View style={[tw`flex border-b border-gray-400 flex-row gap-3 mx-auto m-2 mt-3`, {}]}>
            <TouchableOpacity onPress={toggleMyFeed} style={[myFeed && tw`border-b border-green-700`]}>
              <Text style={[tw`text-xl text-gray-400 pb-1`, myFeed && tw`text-green-700`,{fontFamily:'MadimiOne'}]}>My Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMatches} style={[matches && tw`border-b border-green-700`]}>
              <Text style={[tw`text-xl font-semibold text-gray-400 pb-1`, matches && tw`text-green-700`,{fontFamily:'MadimiOne'}]}>Best Matches</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleRecent} style={[recent && tw`border-b border-green-700`]}>
              <Text style={[tw`text-xl font-semibold text-gray-400 pb-1`, recent && tw`text-green-700`,{fontFamily:'MadimiOne'}]}>Most Recent</Text>
            </TouchableOpacity>
          </View>
          {myFeed && (
            <View style={[tw`mt-2 p-4 flex flex-row justify-between mb-20`, { width: '100%' }]}>

              <View style={[tw`flex-1 border-b border-gray-400 p-3`]}>
                {state?.map((project, index) => (
                    <View key={index}>
                    <TouchableOpacity onPress={() => handleDesc(project.projectName, project.projectDescription,project.Skill)}>
                    <Text style={[tw`text-slate-700 text-xs`]}>Posted 59 mins ago</Text>
                        <Text style={[tw`text-lg font-semibold`,{fontFamily:'MadimiOne'}]}>{project.projectName}</Text>
                        <Text style={[tw`p-3`]}>Fixed price - intermediate - Est,Budget: $50</Text>
                     </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDesc(project.projectName, project.projectDescription,project.Skill)}>
                            <Text numberOfLines={expandedDescriptions[index] ? undefined : 3} style={[tw`text-base text-gray-700 pt-5 `, {}]}>
                            {project.projectDescription}
                            </Text>
                        </TouchableOpacity>
                        {project.projectDescription.length > 100 && (
                        <TouchableOpacity onPress={() => toggleDescription(index)}>
                            <Text style={[tw`text-green-700 underline font-semibold mt-1`]}>{expandedDescriptions[index] ? 'Read Less' : 'Read More'}</Text>
                        </TouchableOpacity>
                        )}
                        <View style={[tw`flex flex-row gap-3 mt-6 mb-6 flex-wrap`, {}]}>
                            {project.Skill &&
                                (showAllSkills ? (
                                project.Skill.map((skill, skillIndex) => (
                                    <View key={skillIndex} style={[tw`flex flex-row items-center`]}>
                                    <Text style={[tw`bg-gray-200 rounded-full px-3 py-2`]}>
                                        {skill}
                                    </Text>
                                    </View>
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
                    </View>
                ))}
              </View>


              <View style={[tw`flex flex-row`]}>
                <SimpleLineIcons name="dislike" size={24} color="black" style={[tw`mr-5 text-green-600`]} />
                <FontAwesome name="heart-o" size={24} color="black" style={[tw`text-green-600 mr-6`]} />
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
