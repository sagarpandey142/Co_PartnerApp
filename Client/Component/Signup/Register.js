import {useState} from "react"
import { View, Text ,TextInput,Button} from 'react-native';
import tw from 'twrnc'
import {useDispatch} from "react-redux"
import {setStep,setFullName,setEmail,setContact,setPassword} from '../../../Client/Slices/SignupData.js'
import {sendEmail} from "../../../Client/Services/Operations/Email.js"

const Register=()=>{
const[state,setState]=useState({
 name:"",
 email:"",
 contact_Number:"",
 password:"",
})
 const dispatch=useDispatch();

 async function sendemail(){
 console.log(
 'hiii')
    const response=await sendEmail(state.email);
    console.log("res",response)
 }

async  function setRedux(){

    await sendemail();
    dispatch(setStep(2));
    dispatch(setFullName(state.name));
    dispatch(setEmail(state.email));
    dispatch(setContact(state.contact_Number));
    dispatch(setPassword(state.password));

 }

  return (
     <View style={tw` mt-7  flex flex-col gap-5`}>
        <View>
             {/*full name*/}
              <Text style={tw`text-xl font-semibold`}>Full Name</Text>
              <TextInput
              onChangeText={(text)=>{
                setState((prevState) => ({ ...prevState, name: text }));
              }}

               style={tw` border-b-2`}
               placeholder="Sagar Pandey"
               />

        </View>

         <View style={tw``}>
                     {/*Email */}
                      <Text style={tw`text-xl font-semibold`}>Email</Text>
                      <TextInput
                       onChangeText={(text)=>{
                            setState((prevState) => ({ ...prevState, email: text }));
                                    }}
                       style={tw` border-b-2`}
                       placeholder="Write Your  Email..."
                       />

                </View>
              <View style={tw``}>
                        {/*Contact Info */}
                       <Text style={tw`text-xl font-semibold`}>Contact Number</Text>
                        <TextInput
                        onChangeText={(text)=>{
                           setState((prevState) => ({ ...prevState, contact_Number: text }));
                          }}
                         style={tw` border-b-2`}
                         placeholder="Write Your Contact  Number Here ..."
                          />

                 </View>
                 <View style={tw``}>
                        {/*Password  */}
                         <Text style={tw`text-xl font-semibold`}>Password</Text>
                         <TextInput
                         onChangeText={(text)=>{
                           setState((prevState) => ({ ...prevState, password: text }));
                          }}
                           style={tw` border-b-2`}
                           placeholder="Password ..."
                             />

                   </View>
                   <View style={tw``}>
                        {/*password  */}
                         <Text style={tw`text-xl font-semibold`}>Confirm Password</Text>
                         <TextInput
                          style={tw` border-b-2`}
                           placeholder="Comfirm Password ..."

                           />

                     </View>
                     <Button
                             title="Continue"
                             onPress={setRedux}
                             color="#004daa"
                        />
                      <Text style={tw`text-cyan-600 text-[16px]`}> Have an account already? Sign In Now!</Text>
                      <Text style={tw`text-slate-600 font-semibold text-[18px]`}>
                              By signing up you agree to the following{' '}
                              <Text style={tw`text-cyan-800`}>Terms & Condition</Text> and{' '}
                              <Text style={tw`text-cyan-700`}>Privacy Policy</Text>
                       </Text>
     </View>
   );
};

export default Register
