/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './redux-store/store';

//Utils
import {
  requestUserPermission,
  notificationListner,
} from './utils/push_notification';

//Navigation
import Stack from './navigation/Stack';

const store = configureStore();

const App: () => Node = () => {
  React.useEffect(() => {
    //Splash Screen hide
    SplashScreen.hide();

    //Notification
    requestUserPermission();
    notificationListner();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar />
      <Stack />
    </Provider>
  );
};

export default App;
