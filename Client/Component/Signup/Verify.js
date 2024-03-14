import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import tw from 'twrnc';

const Verify = () => {
  const { Email } = useSelector((state) => state.signupData);
  const [verificationCode, setVerificationCode] = useState('');

  const handleOTPChange = (code) => {
    setVerificationCode(code);
  };

  const handleOTPVerification = () => {
    console.log('Verification Code:', verificationCode);
    // Add logic for OTP verification here
  };

  return (
    <View style={tw`h-full w-screen flex flex-col gap-3`}>
      <Text style={tw`mt-5 text-xl font-bold flex mx-auto`}>Please Verify Your Email</Text>
      <Text style={tw`text-[17px] mx-auto text-slate-700 font-semibold`}>We have sent a verification code to the email below</Text>
      <Text style={tw`text-lg font-bold mx-auto`}>{Email}</Text>
      <View style={tw`items-center`}>
        <SmoothPinCodeInput
          value={verificationCode}
          onTextChange={handleOTPChange}
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: 'gray',
          }}
          cellStyleFocused={{
            borderColor: 'black',
          }}
          ref={(input) => input && input.focus()}
        />
      </View>
      <Text style={tw`ml-5 mx-auto text-lg font-semibold text-blue-900`}>Resend Code</Text>
      <TouchableOpacity
        style={tw`bg-blue-500 rounded p-3 mt-3`}
        onPress={handleOTPVerification}>
        <Text style={tw`text-white text-center`}>Verify OTP</Text>
      </TouchableOpacity>
       <Text style={tw`text-md font-semibold mx-auto`}>Please also check your spam folder</Text>
    </View>
  );
};

export default Verify;
