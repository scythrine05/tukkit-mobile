import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';

//Redux
import {useSelector} from 'react-redux';

//Icons
import {ARROW_FORWARD, SHARE} from '../../../constants/Icons';

//Constants
import {COLORS} from '../../../constants/Colors';
import {FONT, DIMENSIONS} from '../../../constants/Constants';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Components
import Text from '../../basic/Text';
import Container from '../../ui/Container';

//Utils
import {shotAndShare} from '../../../utils/view_shot';

const defaultImage = require('../../../assets/images/loader.png');

export default function Post({index, item}) {
  const navigation = useNavigation();

  const theme = useSelector(state => state.theme);

  return (
    <Container>
      <Text>More</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_image: {
    height: DIMENSIONS.height,
  },
  display: {
    flex: 3,
  },
  content: {
    flex: 1,
  },
  thumb: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  main: {
    flex: 4,
    padding: 20,
  },
  paragraph: {
    marginTop: 10,
  },
  bottom: {
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressable: {
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
