import React from 'react';
import {View, StyleSheet} from 'react-native';

//Constants
import {
  MOON,
  NOTIFICATION,
  CONTACT,
  INFO,
  SHAREAPP,
  FEEDBACK,
} from '../constants/Icons';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../redux-store/theme/theme.actions';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Components
import Header from '../components/ui/Header';
import Container from '../components/ui/Container';
import ListItem from '../components/ui/ListItem';
import Switch from '../components/basic/Switch';

//Container
import List from '../containers/List';

//Utils
import {share} from '../utils/share';

const Options = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme);

  const list_items = [
    {
      title: 'Night Mode',
      icon: <MOON size={22} />,
      extraProps: (
        <Switch
          initState={theme.mode === 'light' ? false : true}
          onValueChange={() =>
            dispatch(setTheme(theme.mode === 'light' ? 'dark' : 'light'))
          }
        />
      ),
    },
    // {
    //   icon: <NOTIFICATION size={22} />,
    //   title: 'Notification',                                                     // Next Release
    //   onPress: () => navigation.navigate('Notification'),
    // },
    {
      icon: <FEEDBACK size={22} />,
      title: 'Feedback',
      onPress: () => navigation.navigate('Feedback'),
    },
    {
      icon: <INFO size={22} />,
      title: 'About',
      onPress: () => navigation.navigate('About'),
    },
    {
      icon: <SHAREAPP size={22} />,
      title: 'Share this app',
      onPress: () => share('https://tukkit.com'),
    },
  ];

  return (
    <Container>
      <Header type={'noroute'} name={'Options'} />
      <List items={list_items} />
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    paddingTop: 50,
    padding: 20,
  },
});

export default Options;
