import React, { useState, useEffect } from 'react';
import CreateAccountTemplate from './CreateAccountTemplate';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InputChangeType, NavigationStackParams } from '../../Types/Types';
import { StringConstants } from '../../Constants/StringConstants';
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { createNewUser } from '../../api/userSupportApi';
import { ToastAndroid } from 'react-native';

const CreateAccount = ({
  navigation,
}: NativeStackScreenProps<NavigationStackParams>) => {
  const fields = [StringConstants.E_MAIL, StringConstants.PASSWORD, StringConstants.PH_NO];
  const [image, setImage] = useState<any>('');
  const [getData, setData] = useState({});
  const [ getLoader, setLoader ] = useState(false);

  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorCode);
      } else if (response.assets) {
        const selectedImage = response.assets[0];
        if (selectedImage) {
          const imageUri = selectedImage.uri;
          setImage(imageUri);
        }
      }
    });
  };

  const submitImage = async () => {
    setLoader(true);

    const uploaduri = image;
    let filename = uploaduri.substring(uploaduri.lastIndexOf('/') + 1);

    try {
      const uploadTask = await storage().ref(filename).putFile(uploaduri);
      if (uploadTask.state === 'success') {
        const downloadURL = await storage().ref(filename).getDownloadURL();
        console.log('Image uploaded successfully. Download URL:', downloadURL);
        setData({ ...getData, dp: downloadURL });
        ToastAndroid.show("Image uploaded Successfully",ToastAndroid.SHORT);
        setLoader(false);
      } else {
        console.log('Error uploading image. Upload task state:', uploadTask.state);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (props: InputChangeType) => {
    const { newText, field } = props;
    setData({ ...getData, [field]: newText });
  };

  useEffect(() => {
    const uploadData = async () => {
      await submitImage();
    };

    if (image) {
      uploadData();
    }
  }, [image]);

  const handleSubmit =async () => {
    const response = await createNewUser(getData);
    setData({});
    setImage('');
    console.log("response......",response);
  };

  return (
    <CreateAccountTemplate
      fields={fields}
      openImagePicker={openImagePicker}
      image={image}
      submitImage={submitImage}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      getData={getData}
      getLoader = {getLoader}
    />
  );
};

export default CreateAccount;
