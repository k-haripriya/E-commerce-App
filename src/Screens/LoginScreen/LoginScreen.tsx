import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LoginScreenTemplate from './LoginScreenTemplate'
import { InputChangeType } from '../../Types/Types';
import axios from 'axios';
import { CheckEmail } from '../../api/userSupportApi';

const GLOBAL = require('../../Global/Global');

const LoginScreen = () => {
  const [ getEmail, setEmail] = useState('');
  const [ getVisibility, setVisibility ] = useState(false);
  const handleInputChange = (value:InputChangeType) =>{
      console.log("value",value.newText);
      setEmail(value.newText);
  }

  const handleCheckEmail = async() =>{
    try{
      const response = await CheckEmail(getEmail);
      
      GLOBAL.userInfo = response;
      console.log("Global",GLOBAL.userInfo);

      setEmail('');
      handlePasswordComponent();
    }catch(err){
      console.log("Error while trying to check email", err);
    }
     
  }

  const handlePasswordComponent = () =>{
    setVisibility(!getVisibility);
  }
  return (
    <LoginScreenTemplate getEmail={getEmail} handleInputChange={handleInputChange} handleCheckEmail={handleCheckEmail} getVisibility={getVisibility}/>
  )
}

export default LoginScreen