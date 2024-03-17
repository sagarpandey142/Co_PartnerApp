import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import { updateSignupData } from '../../actions/index';


const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('India');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const dispatch = useDispatch();

  const handleSignup = () => {

    const formData = {
      firstName,
      lastName,
      email,
      password,
      country,
      agreeTerms,
    };
    dispatch(updateSignupData(formData));

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setCountry('India');
    setAgreeTerms(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Sign up to find your love</Text>
      <View style={{ width: '100%', marginBottom: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{flexDirection:'column', marginRight: 30}}>

        <Text>First Name</Text>
        <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 40, marginBottom: 10, borderRadius: 4,  height: 35}}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
        />
        </View>

        <View style={{flexDirection:'column'}}>
        <Text>Last Name</Text>
        <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 40, borderRadius: 4, marginBottom: 10, height: 35}}
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
        />
        </View>
      </View>
        <Text>Email</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 8, marginBottom: 10,borderRadius: 4, height: 35 }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text>password</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 8, marginBottom: 10, borderRadius: 4, height: 35 }}
          placeholder="Password (8 or more characters)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text>Country</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 8, marginBottom: 10, }}>
          <Picker
            selectedValue={country}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
            <Picker.Item label="India" value="India" />
          </Picker>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        {/* <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} /> */}
        <Text style={{ marginLeft: 8 }}>Yes, I understand and agree to the Upwork terms of Service, including the User Agreement and Privacy Policy.</Text>
      </View>
      <View style={{backgroundColor:'green'}}>
      <Button title="Create my account"  onPress={handleSignup} />
      </View>
      <Text style={{ marginTop: 10 }}>Already have an account? <Text>Log In</Text></Text>
    </View>
  );
}

export default Signup;
