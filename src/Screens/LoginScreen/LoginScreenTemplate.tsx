import {View, Text, Image} from 'react-native';
import React from 'react';
import {Images} from '../../Constants/Images';
import {styles} from './styles';
import {StringConstants} from '../../Constants/StringConstants';
import InputField from '../../Components/Common/InputField/InputField';
import {LoginType} from '../../Types/Types';
import Button from '../../Components/Common/Button/Button';
import InvisibleButton from '../../Components/Common/InvisibleButton/InvisibleButton';
import EmailComponent from '../../Components/LoginPage/EmailComponent/EmailComponent';
import PasswordComponent from '../../Components/LoginPage/PasswordComponent/PasswordComponent';

const LoginScreenTemplate:React.FC<LoginType> = (props) => {
  const {handleInputChange, getEmail, handleCheckEmail, getVisibility} = props;
  const field = 'Email';
  return (
  <View style={styles.container}>
    <Image source={Images.WHITE_BUBBLE_2} />
    <View style={styles.blueBubble}>
      <Image source={Images.BLUE_BUBBLE_2} />
    </View>
    {!getVisibility && <><Image source={Images.BLUE_BUBBLE_3} style={styles.bubble3} /> 
    <View style={styles.bottomContainer}>
      <EmailComponent handleInputChange={handleInputChange} handleCheckEmail={handleCheckEmail} getEmail={getEmail} />

    </View></>}
    {getVisibility && <View>
      <PasswordComponent/>
    </View>}
    </View>
  );
};

export default LoginScreenTemplate;
