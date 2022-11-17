import React from 'react';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Components
import Switch from '../components/basic/Switch';

//Container
import List from '../containers/List';

const list_items = [
  {
    title: 'Notification',
    extraProps: <Switch initState={false} onValueChange={() => null} />,
  },
];

const Notification = () => {
  const navigation = useNavigation();

  return <List items={list_items} />;
};

export default Notification;
