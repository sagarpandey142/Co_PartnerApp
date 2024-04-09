import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tw from "twrnc";
import { FooterArray, navigateArray } from "../../ArrayUsable/FooterArray";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

const MainFooter = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const navigation = useNavigation();

    const handleItemClick = (index) => {
        setSelectedItem(index);

        const selectedItemData = navigateArray.find(item => item.index === index);
        if (selectedItemData) {
            navigation.navigate(selectedItemData.navigate);
        }
    };

    const [fontsLoaded] = useFonts({
        MadimiOne: require("../../assets/Fonts/2V0YKIEADpA8U6RygDnZZFQoBoHMd2U.ttf"),
    });

    if (!fontsLoaded) {
        return null; 
    }
    console.log("seletced ",selectedItem)
    return (
        <View style={tw`justify-end `}>
            <View style={[tw`w-full py-2 border border-gray-300 rounded-[1rem] `,]}>
                <View style={tw`w-10/12 mx-auto flex flex-row justify-between items-center`}>
                    {FooterArray.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={tw`flex items-center`}
                            onPress={() => handleItemClick(item.index)}
                        >
                            <View style={index === selectedItem ? tw`h-[7px] w-8 bg-green-700 rounded-xl` : tw`hidden`} />
                            {item.iconise ? (
                                <Ionicons
                                    name={item.icon}
                                    size={24}
                                    color={index === selectedItem ? "green" : "black"}
                                />
                            ) : item.feather ? (
                                <Feather
                                    name={item.icon}
                                    size={24}
                                    color={index === selectedItem ? "green" : "black"}
                                />
                            ) : (
                                <Entypo
                                    name={item.icon}
                                    size={24}
                                    color={index === selectedItem ? "green" : "black"}
                                />
                            )}
                            <Text style={[tw`text-md`, { fontFamily: "MadimiOne", color: index === selectedItem ? "green" : "black" }]}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

export default MainFooter;
