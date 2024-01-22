import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { InputFieldType } from '../../../Types/Types'

const InputField = (props:InputFieldType) => {
  const { PlaceHolderText, onChangeText,value } = props;
  return (
    <View style={styles.Container}>
        <TextInput placeholder={PlaceHolderText} placeholderTextColor={'black'} style={styles.textInput} onChangeText={(newText)=>onChangeText({field:PlaceHolderText,newText})} value={value}></TextInput>
    </View>
  )
}

export default InputField