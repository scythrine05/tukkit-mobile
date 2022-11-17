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
          url: 'https://en.wikipedia.org/wiki/Terms_of_service',
        }),
    },
    {
      title: 'Feedsar Private Limited',
      onPress: () =>
        navigation.navigate('WebView', {
          url: 'https://www.zaubacorp.com/company/FEEDSAR-PRIVATE-LIMITED/U72900JH2021PTC016447',
        }),
    },
  ];

  return <List items={list_items} />;
};

export default About;
