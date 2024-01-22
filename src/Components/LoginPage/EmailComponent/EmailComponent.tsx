import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { StringConstants } from '../../../Constants/StringConstants'
import { Images } from '../../../Constants/Images'
import InputField from '../../Common/InputField/InputField'
import InvisibleButton from '../../Common/InvisibleButton/InvisibleButton'
import Button from '../../Common/Button/Button'
import { EmailType } from '../../../Types/Types'

const EmailComponent : React.FC<EmailType>= (props) => {
  const { handleCheckEmail, handleInputChange, getEmail} = props;
  return (
    <View>
      
        <Text style={styles.loginText}>{StringConstants.LOGIN}</Text>
        <View style={styles.flexrow}>
          <Text style={styles.welcomemsg}>{StringConstants.WELCOME_MSG}</Text>
          <Image source={Images.HEART} />
        </View>
        <View style={styles.flexColumn}>
          <InputField
            PlaceHolderText={StringConstants.E_MAIL}
            onChangeText={handleInputChange}
            value={getEmail}
          />
          <View style={styles.separator} />
          <Button
            ButtonText={StringConstants.NEXT}
            onPress={() => handleCheckEmail()}
          />
          <View style={styles.separator} />

          <InvisibleButton />
        </View>
      
    </View>
  )
}

export default EmailComponent