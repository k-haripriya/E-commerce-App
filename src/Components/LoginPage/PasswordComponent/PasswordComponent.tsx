import {View, Text, Image, TextInput, Keyboard,TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import { combineTransition } from 'react-native-reanimated';
import Button from '../../Common/Button/Button';
import InvisibleButton from '../../Common/InvisibleButton/InvisibleButton';

const GLOBAL = require('../../../Global/Global');

const PasswordComponent = () => {
  const originalPassword = GLOBAL.userInfo.password.split('');
  console.log(originalPassword);
  const [PasswordFields, setPasswordFields] = useState(['', '', '', '']);
  const inputRefs = PasswordFields.map(() => useRef<any>(null));

  const handleTextChange = (text: string , index: number) => {
    const newFields = [...PasswordFields];
    newFields[index] = text;
    setPasswordFields(newFields);
    if (text.length === 1 && index < PasswordFields.length - 1) {   
        inputRefs[index + 1].current.focus();
    }
    
  };
  useEffect(() => {
    if (PasswordFields.every((field) => field.length === 1)) {
      Keyboard.dismiss();
      
     }
     console.log(PasswordFields);
    
  }, [PasswordFields]);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image source={{uri: GLOBAL.userInfo.dp}} style={styles.image} />
        </View>
      </View>
      <Text style={styles.userText}>Hello, User!</Text>
      <Text style={styles.text}>Type Your Password</Text>
      <View style={styles.passwordView}>
        {PasswordFields.map((item, index) => {      
          return (
            <View style={PasswordFields[index].length !== 1 ? styles.box : PasswordFields[index] === originalPassword[index] ? [styles.box,styles.active,styles.correct]:[styles.box,styles.active,styles.wrong]} key={index}>
              <TextInput 
              maxLength={1} 
              onChangeText={(text) => handleTextChange(text, index)}
              ref={inputRefs[index]}/>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      
      <View style={styles.buttonView}>
        
      <Button ButtonText='Confirm' onPress={()=>{console.log("Confirm")}}/>
      
      </View>
    </View>
  );
};

export default PasswordComponent;
