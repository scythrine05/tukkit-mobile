import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Pager from '../screens/Pager';
import Options from '../screens/Options';
import WebView from '../screens/WebView';
import About from '../screens/About';
import Notification from '../screens/Notification';
import Feedback from '../screens/Feedback';

//Components
import Header from '../components/ui/Header';

//Utils
import extract_domain from '../utils/extract_domain';

//Redux
import {useDispatch} from 'react-redux';
import {checkTheme} from '../redux-store/theme/theme.actions';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkTheme());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Pager'}>
        <Stack.Screen
          name="Pager"
          component={Pager}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebView"
          component={WebView}
          options={({route}) => ({
            header: props => (
              <Header
                type={'webview'}
                name={extract_domain(route.params.url)}
                {...props}
              />
            ),
            animation: 'slide_from_right',
          })}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            header: props => <Header type={'route'} {...props} />,
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            header: props => <Header type={'route'} {...props} />,
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            header: props => <Header type={'route'} {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
