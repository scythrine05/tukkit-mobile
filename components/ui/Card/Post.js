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

export default function Post({index, item}) {
  const navigation = useNavigation();

  const theme = useSelector(state => state.theme);

  return (
    <Container>
      <Image
        style={styles.display}
        source={{
          uri: item.display,
        }}
      />
      <View style={styles.main}>
        <View style={styles.content}>
          <View>
            <Text size={19} family={FONT.regular} height>
              {item.title}
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text size={15} family={FONT.light} height>
              {item.description}
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Pressable onPress={() => shotAndShare()} style={styles.pressable}>
            <SHARE size={25} />
          </Pressable>
          <View>
            <Text size={12} family={FONT.medium} color={COLORS.main}>
              {item.source}
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('WebView', {url: item.url})}
            style={styles.pressable}>
            <ARROW_FORWARD size={25} />
          </Pressable>
        </View>
      </View>
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
