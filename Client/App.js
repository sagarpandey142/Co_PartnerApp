import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import SignUp from './Pages/SignUp';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store

export default function App() {
  return (
    <Provider store={store}> {/* Wrap your component with Provider */}
      <View style={tw`w-[100%] h-[100%]`}>
        <Text style={tw` w-[100%] h-[100%] flex items-center justify-center`}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <SignUp />
      </View>
    </Provider>
  );
}
