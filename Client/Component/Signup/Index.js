import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Register from './Register.js'
import Verify from "./Verify.js"
import { useSelector } from "react-redux"
import tw from 'twrnc';

const MyComponent = () => {

 const { Step } = useSelector((state) => state.signupData); // Use uppercase 'Step'

 console.log("step", Step);

 return (
    <View style={tw`h-[100%] -ml-6 flex p-12 `}>
      <View style={tw`flex flex-row items-center `}>
        <View>
          <Text style={tw`rounded-full ${Step === 1 ? 'bg-blue-200' : 'bg-slate-200 '}  px-3 py-2 mx-auto`}>1</Text>
          <Text>Register</Text>
        </View>

        <View>
          <Text style={tw`h-[2px] w-24 bg-green-700 -translate-y-24`}></Text>
        </View>

        <View>
          <Text style={tw`rounded-full  ${Step === 2 ? 'bg-blue-200' : 'bg-slate-200 '} px-3 py-2 mx-auto`}>2</Text>
          <Text>Verify</Text>
        </View>

        <View>
          <Text style={tw`h-[2px] w-24 bg-green-700`}></Text>
        </View>

        <View>
          <Text style={tw`rounded-full  ${Step === 3 ? 'bg-blue-200' : 'bg-slate-200 ' } px-3 py-2 mx-auto`}>3</Text>
          <Text>Explore</Text>
        </View>
      </View>
     <View>
           {
                  Step === 2 && (
                    <Register />
                  )
            }
     </View>
     <View >
           {
                   Step === 1 && (
                     <Verify />
                   )
           }
     </View>

    </View>
  );
};

export default MyComponent;
