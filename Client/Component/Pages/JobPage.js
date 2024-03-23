import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MainHeader from '../Common/MainHeader';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProjectsHandler } from '../../services/operations/ProjectsHandler'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


const JobPage = () => {

  const [myFeed, setMyFeed] = useState(false);
  const [matches, setMatches] = useState(false);
  const [recent, setRecent] = useState(false);
  const [state, setState] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [showAllSkills, setShowAllSkills] = useState(false);

  

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
    const variable = await ProjectsHandler('hii');
    console.log('yeee', variable.data.projects);
    setState(variable.data.projects);
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
   

  return (
    <View>
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
          <View style={[tw`border-b border-gray-300 mx-4 mt-5`]} />
          {/* card component */}
          <View style={[tw`flex flex-row gap-3 w-9/12 mx-auto m-2 mt-3`, {}]}>
            <TouchableOpacity onPress={toggleMyFeed}>
              <Text style={[tw`text-xl font-semibold text-gray-500`,{fontFamily:'MadimiOne'}]}>My Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMatches}>
              <Text style={[tw`text-xl font-semibold text-gray-500`,{fontFamily:'MadimiOne'}]}>Best Matches</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleRecent}>
              <Text style={[tw`text-xl font-semibold text-gray-500`,{fontFamily:'MadimiOne'}]}>Most Recent</Text>
            </TouchableOpacity>
          </View>
          {myFeed && (
            <View style={[tw`mt-2 p-4 flex flex-row border justify-between mb-20`, { width: '100%' }]}>
              <View style={[tw`flex-1`]}>
                {state.map((project, index) => (
                    <View key={index}>
                        <Text style={[tw`text-3xl`, { fontFamily: 'MadimiOne' }]}>{project.projectName}</Text>
                        <Text numberOfLines={expandedDescriptions[index] ? undefined : 3} style={[tw`text-base text-gray-500 pt-5 font-semibold`, {}]}>
                        {project.projectDescription}
                        </Text>
                        {project.projectDescription.length > 100 && (
                        <TouchableOpacity onPress={() => toggleDescription(index)}>
                            <Text style={[tw`text-blue-500 font-semibold mt-1`]}>{expandedDescriptions[index] ? 'Read Less' : 'Read More'}</Text>
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
                            {project.Skill.length > 3 && (
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
