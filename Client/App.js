import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import GetStarted from './Component/GetStarted';

export default function App() {
  return (
    <View style={tw`w-[100%] h-[100%]`}>
        <GetStarted/>
    </View>
  );
}


