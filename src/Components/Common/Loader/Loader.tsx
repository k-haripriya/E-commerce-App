import { View, Text, Image, Modal } from 'react-native'
import React from 'react'
import { styles } from './styles'
import * as Animatable from 'react-native-animatable';
import { ColorConstants } from '../../../Constants/ColorConstants';
import { SlideInLeft } from 'react-native-reanimated';

const Loader = () => {
  return (
    <Modal>
    <View style={styles.container}>
      {
        Array(3).fill(null).map((item,index)=>{
          return(
            <View style={{flexDirection:'row'}} key={index}>
            <Animatable.View  style={[styles.circle,{backgroundColor:ColorConstants.APP_THEME}]} animation={'fadeIn'} iterationCount={Infinity} direction='alternate'/>
        
            <Animatable.View style={[styles.circle,{backgroundColor:ColorConstants.APP_THEME}]} animation={'fadeOut'} iterationCount={Infinity} direction='alternate'/>
            </View>
          )
        })
      }

        

        

    </View>
</Modal>
  )
}

export default Loader