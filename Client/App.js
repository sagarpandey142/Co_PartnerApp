import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw`w-[100%] h-[100%]`}>
      <Text style={tw` w-[100%] h-[100%] flex item-center justify-center`}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


