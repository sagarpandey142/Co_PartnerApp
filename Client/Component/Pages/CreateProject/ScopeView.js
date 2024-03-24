import React, { useState } from 'react';
import { View, Text } from "react-native";
import tw from "twrnc";
import CheckBox from "expo-checkbox"; 
import Navbar from '../../Common/Navbar';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';

const ScopeView = () => {
  const [projectLength, setProjectLength] = useState("");
  const[spanPeriod,setSpanPeriod]=useState("");
  const[chance,setChance]=useState("");
  
  const [fontsLoaded] = useFonts({
    MadimiOne: require('../../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf'),
    TwinkleStar: require('../../../assets/Fonts/-W_oXI_oSymQ8Qj-Apx3HGN_Hu1RTCk5FtSDETgf0cK_NOeFgpRt9rN5.ttf'),
  });
  
  return (
    <View style={tw`h-[100%] mt-3`}>
      <Navbar />
      <View style={tw`w-11/12 mx-auto`}>
        <Text style={[tw`mt-7 text-2xl`, { fontFamily: "MadimiOne" }]}>
          Could you please describe the scope of your work?
        </Text>
        <Text style={tw`text-[15px] mx-auto mt-3`}>
          Estimate the size and duration of your project.
        </Text>

       {
         projectLength==="" && (
            <View>
                        {/* Large */}
              <View style={tw`flex-row items-center gap-2 mt-3`}>
                <CheckBox
                  value={projectLength === "large"}
                  onValueChange={() =>{
                    setProjectLength("large")
                    setChance(2)
                  }}
                  style={tw`rounded-full px-2`}
                />
                <View style={tw`mt-12`}>
                  <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>Large</Text>
                  <Text style={[tw`ml-2 text-slate-500 max-w-[90%] text-[15px]`, {}]}>Longer-term or complex initiative (e.g., develop and execute a brand strategy)</Text>
                </View>
              </View>

              {/* Medium */}
              <View style={tw`flex-row items-center gap-2 mt-3`}>
                <CheckBox
                  value={projectLength === "medium"}
                  onValueChange={() => {
                    setProjectLength("medium")
                    setChance(2)
                }}
                  style={tw`rounded-full px-2`}
                />
                <View style={tw`mt-5`}>
                  <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>Medium</Text>
                  <Text style={[tw`ml-2 text-slate-500 max-w-[80%] text-[15px]`, {}]}>Span Period of 3 to 5 months (e.g., develop and execute Logos, icons)</Text>
                </View>
              </View>

              {/* Small */}
              <View style={tw`flex-row items-center gap-2 mt-3`}>
                <CheckBox
                  value={projectLength === "small"}
                  onValueChange={() =>{ 
                    setProjectLength("small")
                    setChance(2)
                  }}
                  style={tw`rounded-full px-2`}
                />
                <View style={tw`mt-5`}>
                  <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>Small</Text>
                  <Text style={[tw`ml-2 text-slate-500 max-w-[81.7%] text-[15px]`, {}]}>Span Period of 1 to 3 months (e.g., create logos for new Brands)</Text>
                </View>
              </View>
        
         </View>
         )
       }
        {/* Display the selected option */}
        {projectLength !== "" && (
            <View style={tw` flex flex-row items-center`}>
                <View style={tw`mt-10`}>
                <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>
                  {projectLength === "large" ? "Large" : projectLength === "medium" ? "Medium" : "Small"}
                </Text>
                <Text style={[tw`ml-2 text-slate-500 max-w-[90%] text-[17px]`, {}]}>
                  {projectLength === "large" ? "Longer-term or complex initiative (e.g., develop and execute a brand strategy)" :
                    projectLength === "medium" ? "Span Period of 3 to 5 months (e.g., develop and execute Logos, icons)" :
                    "Span Period of 1 to 3 months (e.g., create logos for new Brands)"}
                </Text>
                </View>
                <View style={tw` border-[3px] border-gray-300 rounded-full p-2`}>
                  <FontAwesome5 name="pencil-alt" size={17} color="#15803d" />
                </View>
            </View>
        )}
        {
          (chance==2 && spanPeriod==="") && (
             <View>
                    <Text style={[tw`mt-7 text-xl`, { fontFamily: "MadimiOne" }]}>How Long will your project take?</Text>
                    {/*6 months*/}
                    <View style={tw` mt-4 flex flex-row gap-3`}>
                       <CheckBox
                       value={spanPeriod === "7"}
                        onValueChange={() =>{ 
                          setSpanPeriod("7")
                          setChance(3)
                        }}
                         style={tw`rounded-full px-2`}
                       />
                       <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>More Than 7 Month</Text>
                    </View>
                    {/*3 months*/}
                    <View style={tw` mt-4 flex flex-row gap-3`}>
                       <CheckBox
                       value={spanPeriod === "3"}
                        onValueChange={() =>{ 
                          setSpanPeriod("3")
                          setChance(3)
                        }}
                         style={tw`rounded-full px-2`}
                       />
                       <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>3 to 7 Month</Text>
                    </View>
                    {/*2 month*/}
                    <View style={tw` mt-4 flex flex-row gap-3`}>
                       <CheckBox
                       value={spanPeriod === "1"}
                        onValueChange={() =>{ 
                          setSpanPeriod("1")
                          setChance(3)
                        }}
                         style={tw`rounded-full px-2`}
                       />
                       <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>1 to 3 Month</Text>
                    </View>
             </View>
          )
        }
        {
          spanPeriod!=="" && (
             <View  style={tw` mt-4 flex flex-row items-center justify-between`}>
                    <View>
                         <Text style={[tw`text-lg`, { fontFamily: "MadimiOne" }]}>{spanPeriod==="7" ? "More Than 7 months" : spanPeriod==="3" ? "More Than 3 month" : "More Than 1 Month"}</Text>
                    </View>
                    <View style={tw` border-[3px] border-gray-300 rounded-full p-2  mr-5`}>
                    <FontAwesome5 name="pencil-alt" size={17} color="#15803d" />
                  </View>
             </View>
          )
        }
      </View>
    </View>
  );
};

export default ScopeView;
