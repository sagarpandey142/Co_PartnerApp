import React from 'react'
import { View } from 'react-native-animatable'
import { useSelector } from 'react-redux'
import TitlePage from './TitlePage';
import SkillsPage from './SkillsPage';

const Index = () => {
    const{step}=useSelector((state)=>state.createProject);
  return (
    <View>
         {
            step==1 && (
                <TitlePage/>
            ) 
         }
         {
            step==2 && (
               <SkillsPage/>
            )
         }
    </View>
  )
}

export default Index