import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ButtonType } from '../../../Types/Types'

const Button = (props:ButtonType) => {
  const { ButtonText,onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={()=>onPress()}>
        <Text style={styles.buttontext}>{ButtonText}</Text>

    </TouchableOpacity>
  )
}

export default Button