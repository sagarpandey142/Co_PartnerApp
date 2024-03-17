import React from 'react'
import tw from 'twrnc'
import { Link } from '@react-navigation/native';
import { Button } from 'react-native';

const Upload = () => {
  return (
    <View>
        <Text style={tw`font-bold, text-2xl`}>Create Your Profile</Text>
        <Text>How do you like to tell us about yourself ?</Text>
        <Text>We need to get a sense of you education, experience and skills. It's quickest to import your application - you can edit it before your profile goes live.</Text>
        {/* <Link to={}>How can a Profile helps me stand out?</Link> */}
        <Button>Upload your resume</Button>
    </View>
  )
}

export default Upload