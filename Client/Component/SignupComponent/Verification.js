import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'; // Import OTPTextInput
import tw from 'twrnc';
import { useFonts } from 'expo-font';
import { verifyOTP } from '../../services/operations/generate&verifyOTP';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../Common/Navbar'
import { generateOTP } from '../../services/operations/generate&verifyOTP';

const Verification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigation();
  const { data } = useSelector((state) => state.signup);

  const handleOTPChange = (code) => {
    setOtp(code);
  };

  
    const email = data.email
    console.log("first", email)

    const [fontsLoaded] = useFonts({
        MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
        TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
      });
    
      if (!fontsLoaded) {
        return null;
      }
  
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        console.log("here", otp)
      const response = await verifyOTP(email, otp);

      console.log("tt", response.statusText)
      
      if(response.statusText=='OK'){
        navigate.navigate?.('Upload')
      }
    };

  return (
    <View style={[tw`flex mx-auto justify-between items-center`,{ fontFamily: 'TwinkleStar' }]}>
    <Navbar/>
      <Text style={[tw`text-xl max-w-[90%] pt-10`, { fontFamily: 'TwinkleStar' }]}>
        We need to verify your email address. We have sent an email containing a 6-digit code which expires in 15
        minutes. Please enter the code below:
      </Text>
      <OTPInputView
      style={{ width: '80%', height: 200 }}
      pinCount={4} // Change the pinCount to match your OTP length
      autoFocusOnLoad
      codeInputFieldStyle={{ width: 60, height: 60, borderWidth: 0, borderBottomWidth: 1 }}
      codeInputHighlightStyle={{ borderColor: 'blue' }}
      onCodeFilled={handleOTPChange}
      textColor="black"
    />
      <TouchableOpacity style={tw`bg-green-600 px-8 py-2 rounded-3xl `} onPress={handleVerifyOtp}>
        <Text style={tw`text-white text-base font-semibold mx-auto`}>Continue</Text>
      </TouchableOpacity>
      <Text style={[tw`text-base`, { fontFamily: 'TwinkleStar' }]}>Don't receive the email? Try checking your junk and spam folders. <Text style={tw`font-bold text-xl`} onPress={handleResend}>Resend</Text></Text>

    </View>
  );
};

export default Verification;
