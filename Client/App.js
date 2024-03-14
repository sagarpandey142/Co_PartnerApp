import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MyComponent from "./Component/Signup/Index"
import { Text, View } from 'react-native';
import tw from 'twrnc'
import rootReducer from "./Reducers/index.js"
import{Provider} from "react-redux"
import { createStore } from 'redux';
import {configureStore} from "@reduxjs/toolkit"

const store=configureStore({
    reducer:rootReducer,
})


export default function App() {
  return (

   <Provider store={store}>
   <View style={tw`w-screen h-[100%]  border border-red-500`} >
      <MyComponent/>
    </View>
  </Provider>
  );
}

