import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome6, Fontisto } from '@expo/vector-icons';
import tw from 'twrnc';
import { jobsHandler } from '../../services/operations/JobsHandler';
import { MaterialIcons } from '@expo/vector-icons';

const SavedJob = () => {
  const [jobs, setJobs] = useState([]);

  const [expandedDescriptionIndex, setExpandedDescriptionIndex] = useState(null);

  const findSavedJobs = async () => {
    try {
      const response = await jobsHandler.getSavedJobs();
      console.log("response front jobs", response);
      setJobs(response);
    } catch (error) {
      console.log("error", error.message);
    }
  }

  useEffect(() => {
    findSavedJobs();
  }, []);

  const toggleDescription = (index) => {
    setExpandedDescriptionIndex(expandedDescriptionIndex === index ? null : index);
  };

  return (
    <View>
      <View style={[tw`flex justify-between`]}>
        <Entypo name="cross" size={24} color="black" />
        <Text style={[tw`text-lg font-bold`]}>Saved Jobs</Text>
        <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
      </View>

      <Text style={[tw`text-slate-500 text-xs`]}>Posted 8 hours ago</Text>

      <View>
        {jobs.map((project, index) => (
          <View key={index}>
            <View style={[tw`flex flex-row justify-between`]}>
              <Text>{project.projectName}</Text>
              <Fontisto name="dislike" size={24} color="black" style={[tw`text-green-700`]} />
              <Entypo name="heart" size={24} color="black" style={[tw`text-green-700`]} />
            </View>
            <Text>{expandedDescriptionIndex === index ? project.projectDescription : `${project.projectDescription.substring(0, 100)}...`}</Text>
            {project.projectDescription.length > 100 && (
              <TouchableOpacity onPress={() => toggleDescription(index)}>
                <Text style={[tw`text-blue-500`]}>
                  {expandedDescriptionIndex === index ? 'Read Less' : 'Read More'}
                </Text>
              </TouchableOpacity>
            )}
            <Text>{project.Skill}</Text>
            <Text style={[tw`text-sm text-slate-700 flex flex-row `]}>
                <MaterialIcons name="verified" size={24} color="black" style={[tw`mr-2`]}/>
                {project.userVerified}
            </Text>
          </View>
        ))}
      </View>

    </View>
  );
}

export default SavedJob;
