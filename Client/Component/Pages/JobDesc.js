import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectsByNameHandler } from '../../services/operations/ProjectsHandler'
import { useFonts } from 'expo-font';
import tw from 'twrnc'
import MainHeader from '../Common/MainHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../Common/Footer'

const JobDesc = ({ projectName, projectDescription, Skill}) => {
  console.log("pname", projectName, projectDescription, Skill)
  const [project, setProject] = useState([]);
  const {desc} = useSelector((state)=>state.signup);
  console.log("data", desc)

  const [fontsLoaded] = useFonts({
    MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
  }); 

  const fetchProjectById = async () => {
    try {
      console.log("ppname",projectName)
      const variable = await ProjectsByNameHandler(projectName);
      const response = variable.data.projects;
      console.log("response desc", response);
      setProject(response[0]);
      console.log("project", project)
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  };

  useEffect(() => {
    fetchProjectById();
  }, [projectName]);


  return (
    <View style={[tw``]}>
        <MainHeader mainName="CoPartner" nameHeader="" icon1="" icon2="notifications" />
        <ScrollView>
            <View style={[tw`flex mx-auto justify-between mt-4 items-center ml-3 w-10/12 mb-4 border `]}>   
              <Text style={[tw`text-3xl mb-3`,{fontFamily:'MadimiOne'}]}>{desc.projectName}</Text>
              <Text style={[tw`text-base`,{fontFamily:'TwinkleStar'}]}>{desc.projectDescription}</Text>
              <View style={[tw`flex flex-row items-center border w-[90%] mb-50`]}>
                    {
                      desc.Skill?.map((skill, index)=>(
                        <View key={index} style={[tw`flex flex-row flex-wrap items-center border`]}>
                            <Text style={[tw`bg-gray-200 rounded-full px-3 py-2 mr-2`]}>
                                {skill}
                            </Text>
                        </View>
                      ))
                    }
              </View>
            </View>
        </ScrollView>
        <Footer button1Text="Chat Now" button2Text="Save Post" reducerName="signup" data="" navigate="./"/>
    </View>
  );
};

export default JobDesc;
