import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Alert } from 'react-native';
import OTPInputView from '../Common/OtpInput'
import tw from 'twrnc'
import { useFonts } from 'expo-font';

const Verification = ({ email }) => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const [fontsLoaded] = useFonts({
        MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
        TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
      });
    
      if (!fontsLoaded) {
        return null;
      }
  
    const handleVerifyOtp = async () => {
      try {
        setLoading(true); // Start loading
  
        const response = await fetch('http://10.6.135.17:4000/v1/VerifyOtp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          Alert.alert('Success', 'OTP Verified Successfully');
          // You can navigate the user to the next screen or perform any other action here upon successful verification
        } else {
          Alert.alert('Error', data.message || 'Failed to verify OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', 'Something went wrong. Please try again later.');
      } finally {
        setLoading(false); // Stop loading
      }
    };

  return (
    <View style={{fontFamily: 'TwinkleStar'}}>
      <Text style={[tw`text-xl max-w-[90%]`,{fontFamily: 'TwinkleStar'}]}>
        We need to verify your email address. We have sent an email containing a 6-digit code which expires in 15
        minutes. Please enter the code below:
      </Text>
      <OTPInputView
        pinCount={4}
        onCodeFilled={(code) => setOtp(code)}
      />
      <TouchableOpacity style={tw`bg-green-600 px-8 py-2 rounded-3xl `}>
              <Text style={tw`text-white text-base font-semibold mx-auto`}>Continue</Text>
      </TouchableOpacity>
      <Text style={[tw`text-xl`,{fontFamily: 'TwinkleStar'}]}>Don't receive the email? Try checking your junk and spam folders. <Text style={tw`font-bold text-xl`}>Resend</Text></Text>
    </View>
  );
};

export default Verification;
