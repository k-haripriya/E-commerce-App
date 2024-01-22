import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationStackParams } from '../Types/Types';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import CreateAccount from '../Screens/CreateAccount/CreateAccount';
import { RouterConstants } from '../Constants/RouterConstants';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import Webview from '../webview/Webview';

const Navigation = () => {
  const Stack = createNativeStackNavigator<NavigationStackParams>();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={RouterConstants.SplashScreen} screenOptions={{headerShown:false}}>
            <Stack.Screen name={RouterConstants.SplashScreen} component={SplashScreen}/>
            <Stack.Screen name={RouterConstants.CreateAccount} component={CreateAccount}/>
            <Stack.Screen name={RouterConstants.LoginScreen} component={LoginScreen}/>
            {/* <Stack.Screen name={'WebView'} component={Webview}/> */}


            

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation