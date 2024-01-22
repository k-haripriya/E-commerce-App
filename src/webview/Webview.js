import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';

const Webview = () => {

  const onMessage = (event) => {
    const message = event.nativeEvent.data;
    console.log('Message received from WebView:', message);
  };

  const injectedJavaScript = `
  const subscribeButton = document.querySelector('.scTailwindThreadQuestionQuestionactionssubscribe .scSharedMaterialbuttonroot');
  if (subscribeButton) {
    subscribeButton.addEventListener('click', function() {
      window.ReactNativeWebView.postMessage('SubscribeButtonClicked');
    });
  }
`;

  return (                    
    <WebView 
      source={{ uri: 'https://support.google.com/admanager/thread/237633762/where-do-i-accept-the-google-analytics-terms-of-service?hl=en' }}  // Replace with your actual URL
      style={{ flex: 1 }} 
      onMessage={onMessage}
      injectedJavaScript={injectedJavaScript}
    />
  );
};

export default Webview;
