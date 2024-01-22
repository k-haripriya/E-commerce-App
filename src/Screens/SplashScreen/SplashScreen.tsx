import React, { useEffect } from 'react';

import SplashScreenTemplate from './SplashScreenTemplate';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../Types/Types';
import { RouterConstants } from '../../Constants/RouterConstants';

const SplashScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationStackParams>) => {
   const handleGetStarted = () => {
    navigation.navigate(RouterConstants.CreateAccount);
   }

   const handleAlreadyHaveAnAcc = () =>{
    navigation.navigate(RouterConstants.LoginScreen);
   }
 
  return <SplashScreenTemplate handleAlreadyHaveAnAcc={handleAlreadyHaveAnAcc} handleGetStarted={handleGetStarted}/>
};

export default SplashScreen;
