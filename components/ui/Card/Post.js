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
import ImageViewer from '../../ui/ImageViewer';

//Utils
import {shotAndShare} from '../../../utils/view_shot';

const defaultImage = require('../../../assets/images/loader.png');

export default function Post({index, item}) {
  const [imgView, setImgView] = React.useState(false);

  const navigation = useNavigation();

  return (
    <Container>
      <ImageViewer
        image={{uri: item.display}}
        visible={imgView}
        setVisible={() => setImgView(false)}
        footer={item.title}
      />
      <Pressable style={styles.display} onPress={() => setImgView(true)}>
        <View style={styles.container}>
          <Image
            style={styles.container}
            source={{
              uri: item.display,
            }}
          />
        </View>
      </Pressable>
      <View style={styles.main}>
        <View style={styles.content}>
          <View>
            <Text size={17} family={FONT.semi_bold} height>
              {item.title}
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text
              size={14.5}
              family={FONT.light}
              color={{
                dark: COLORS.dark_small_text,
                light: COLORS.light_small_text,
              }}
              height>
              {item.description}
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Pressable onPress={() => shotAndShare()} style={styles.pressable}>
            <SHARE size={25} />
          </Pressable>
          <View style={styles.source}>
            <Text
              size={11}
              family={FONT.medium}
              color={{
                dark: COLORS.main,
                light: COLORS.main,
              }}>
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
    flex: 2.2,
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
    marginTop: 8,
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
