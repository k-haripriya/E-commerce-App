import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../Constants/Images';
import Button from '../../Components/Common/Button/Button';
import { StringConstants } from '../../Constants/StringConstants';
import { SplashScreenType } from '../../Types/Types';

const SplashScreenTemplate:React.FC<SplashScreenType> = (props) => {
  const { handleAlreadyHaveAnAcc, handleGetStarted } =props;
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.mainView}>
            <View style={styles.logo}>
              <Image source={Images.LOGO} />
            </View>
            <Text style={styles.appname}>{StringConstants.TITLE}</Text>
            <Text style={styles.slogan}>{StringConstants.SLOGAN}</Text>
          </View>
          <View style={styles.bootomView}>
            <Button ButtonText='GET STARTED' onPress={()=>handleGetStarted()}/>
            <TouchableOpacity style={styles.bottomContainer} onPress={()=>handleAlreadyHaveAnAcc()}>
            <Text style={styles.bottomText}>{StringConstants.LOGIN_OPTION}</Text>
            <Image source={Images.NEXT}/>
            </TouchableOpacity>
            
          </View>
        </SafeAreaView>
      );
}

export default SplashScreenTemplate