import {View, Text, Image, TouchableOpacity,ToastAndroid} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../Constants/Images';
import InputField from '../../Components/Common/InputField/InputField';
import Button from '../../Components/Common/Button/Button';
import {StringConstants} from '../../Constants/StringConstants';
import {CreateAccountType} from '../../Types/Types';
import InvisibleButton from '../../Components/Common/InvisibleButton/InvisibleButton';
import Loader from '../../Components/Common/Loader/Loader';

const CreateAccountTemplate = (props: CreateAccountType) => {
  const {fields, openImagePicker, image, submitImage,handleInputChange, handleSubmit, getData, getLoader} = props;
  return (
    <View style={styles.mainContainer}>
      <Image source={Images.WHITE_BUBBLE} />
      <Image source={Images.BLUE_BUBBLE} style={styles.blueBubble} />
      <View style={styles.content}>
        <Text style={styles.title}>{StringConstants.CREATE_ACCOUNT}</Text>
        <TouchableOpacity onPress={() => openImagePicker()}>
          {!image ? (
            <View>
              <Image source={Images.ELLIPSE} style={styles.ellipse} />

              <Image source={Images.CAMERA} style={styles.camera} />
            </View>
          ) : (
            <Image source={{uri: image}} style={[styles.image]} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        {fields.map((field, index) => {
          return <InputField key={index} PlaceHolderText={field} onChangeText={handleInputChange} value={getData[field]} />;
        })}
        <View style={styles.button}>
          <Button ButtonText={StringConstants.DONE} onPress={()=>handleSubmit()} />
        </View>
        <InvisibleButton/>
        
        {/* <TouchableOpacity onPress={()=>submitImage()}>
          <Text style={{textAlign: 'center'}}>Upload</Text>
        </TouchableOpacity> */}
      </View>
      {
        getLoader && <Loader/>
      }
    </View>
  );
};

export default CreateAccountTemplate;
