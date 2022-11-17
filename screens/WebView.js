import React from 'react';
import {WebView} from 'react-native-webview';

const Webview = ({route}) => {
  const {url} = route.params;
  return (
    <WebView
      source={{
        uri: url,
      }}
      avaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      scrollEnabled
      scalesPageToFit
      javaScriptEnabled={true}
      zoomable={false}
    />
  );
};

export default Webview;
