import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectsByNameHandler } from '../../services/operations/ProjectsHandler'
import { useFonts } from 'expo-font';
import tw from 'twrnc'
import MainHeader from '../Common/MainHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

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
            <View style={[tw`flex mt-4 ml-3 w-10/12 mb-4 border ml-4`]}>   
              <Text style={[tw`text-lg font-bold mb-3`]}>{desc.projectName}</Text>
              <View style={[tw`border-b border-gray-400 w-full mt-2 mb-2`]}/>
              <Text style={[tw`text-slate-400 `]}>Posted 43 mins ago</Text>
              <View style={[tw`border-b border-gray-400 w-full mt-2 mb-2`]}/>
              <Text style={[tw`text-base`]}>{desc.projectDescription}</Text>
              <View style={[tw`border-b border-gray-400 w-full mt-2 mb-2`]}/>
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
        <View style={[tw`flex flex-row mx-auto absolute inset-x-0 bottom-0`]}>
          <TouchableOpacity>
            <Text style={[tw`bg-green-700 rounded-full text-lg text-white text-semibold px-10 py-2`]}>Chat Now</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={[tw`flex gap-5 ml-3 items-center border-2 text-lg text-green-600 border-green-700 rounded-full text-bold px-8 py-2`]}>
            <AntDesign name="hearto" size={24} color="black"  style={[tw`mr-10 text-lg text-green-700`]}/>
            Save Post</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default JobDesc;
