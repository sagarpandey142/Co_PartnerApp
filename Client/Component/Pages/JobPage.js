import React, {useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MainHeader from '../Common/MainHeader'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ProjectsHandler} from '../../services/operations/ProjectsHandler'

const JobPage = () => {
    const [myFeed, setMyFeed] = useState(false);
    const [matches, setMatches] = useState(false);
    const [recent, setRecent] = useState(false); 
    const [state, setState] = useState({});

    const toggleMyFeed = () => {
        setMyFeed(!myFeed);
        setMatches(false);
        setRecent(false);
    }

    const toggleMatches = () => {
        setMatches(!matches);
        setMyFeed(false);
        setRecent(false);
    }

    const toggleRecent = () => {
        setRecent(!recent);
        setMatches(false);
        setMyFeed(false);
    }

    const func = async() =>{
        console.log("nhi aya")
        const variable = await ProjectsHandler('hii');
        console.log("yeee",variable.data.projects)
        setState( variable.data.projects);
        console.log("state",state)
    }

    
    useEffect(()=>{
        func();
    },[])

    useEffect(() => {
        console.log("Updated state:", state);
    }, [state]);
  return (
    <View>
      <MainHeader mainName="CoPartner" nameHeader="" icon1="" icon2="notifications" />
      <View style={[tw`flex flex-row mx-auto`,{}]}>
            <View style={[tw`flex flex-row items-center border border-gray-300 rounded-full h-10 px-25 mr-4 `, {}]}>
                <AntDesign name="search1" size={24} color="black" style={[tw`mr-2`]} />
                <TextInput 
                placeholder='Search for jobs'
                style={[tw`flex-1`, {}]} 
                />
            </View>
            <MaterialCommunityIcons name="heart-circle-outline" size={24} color="black" style={[tw`flex items-center text-5xl text-green-600`,{}]} />
      </View>
      <View style={[tw`border-b border-gray-300 mx-4 mt-5`]} />

      {/* card component */}
      <View style={[tw`flex flex-row gap-4 text-2xl text-gray-500`,{}]}>
            <TouchableOpacity onPress={toggleMyFeed}>
                <Text style={[tw`text-xl`]}>My Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMatches}>
                <Text style={[tw`text-xl`]}>Best Matches</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleRecent}>
                <Text style={[tw`text-xl`]}>Most Recent</Text>
            </TouchableOpacity>
      </View>

      {
        myFeed && (
            <View style={[tw`border border-gray-300 mx-4 mt-2 p-4`,{}]}>
                {
                    Object.keys(state).map((key, index) => (
                        <Text key={index}>{state[key]}</Text>
                    ))
                }
            </View>
        )

      }

      {
        matches && (
            <View style={[tw`border border-gray-300 mx-4 mt-2 p-4`,{}]}>
                <Text>matches</Text>
            </View>
        )
      }

      {
        recent && (
            <View style={[tw`border border-gray-300 mx-4 mt-2 p-4`,{}]}>
                <Text>recent</Text>
            </View>
        )
      }
    </View>

  );
}

export default JobPage;
