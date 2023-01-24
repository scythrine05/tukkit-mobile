import React from 'react';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Container
import List from '../containers/List';

const About = () => {
  const navigation = useNavigation();
  const list_items = [
    {
      title: 'Terms and Conditions',
      onPress: () =>
        navigation.navigate('WebView', {
          url: 'https://www.tukkit.com/assets/docs/terms-and-conditions.html',
        }),
    },
    {
      title: 'Privacy Policy',
      onPress: () =>
        navigation.navigate('WebView', {
          url: 'https://www.tukkit.com/assets/docs/privacy-policy.html',
        }),
    },
  ];

  return <List items={list_items} />;
};

export default About;
