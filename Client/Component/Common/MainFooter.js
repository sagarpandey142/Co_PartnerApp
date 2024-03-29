import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tw from "twrnc";
import { FooterArray ,navigateArray} from "../../ArrayUsable/FooterArray";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';


const MainFooter = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const navigate=useNavigation()
    const handleItemClick = (index) => {
        console.log("index",index)
        setSelectedItem(index);
        const selectedItemData = navigateArray.find(item => item.index === index);
        if (selectedItemData) {
            navigate.navigate(selectedItemData.navigate);
        }
    };

    const [fontsLoaded] = useFonts({
        MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
        TwinkleStar: require("../../assets/Fonts/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OryLMFuOLlNldbw.ttf")
    });
    return (
        <View style={tw`justify-end`}>
            <View style={tw`w-full py-2  border border-gray-300 rounded-[1rem]`}>
                <View style={tw`w-10/12 mx-auto flex flex-row justify-between items-center`}>
                    {FooterArray.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={tw` flex items-center`}
                            onPress={() => handleItemClick(item.index)}
                        >
                        <Text style={tw`${index===selectedItem ? "flex -mt-3   h-[7px] w-8 bg-green-700 rounded-xl":"hidden"}`}></Text>
                           {
                                item.iconise === true ? (
                                    <Ionicons 
                                        name={item.icon} 
                                        size={24} 
                                        color="black"  
                                        style={[tw``, index === selectedItem ? tw`text-green-500` : tw`text-slate-500`]}
                                    />
                                ) : (
                                    item.feather === true ? (
                                        <Feather 
                                            name={item.icon} 
                                            size={24} 
                                            color="black" 
                                            style={[tw``, index === selectedItem ? tw`text-green-500` : tw`text-slate-500`]}
                                        />
                                    ) : (
                                        <Entypo 
                                            name={item.icon} 
                                            size={24} 
                                            style={[tw``, index === selectedItem ? tw`text-green-500` : tw`text-slate-500`]} 
                                        />
                                    )
                                )
}

                            <Text style={[tw` text-md `,{fontFamily:"MadimiOne"}, index === selectedItem ? tw`text-green-500` : tw`text-slate-500`]}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

export default MainFooter;
