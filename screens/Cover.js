import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from 'react-native';

//Constants
import {DIMENSIONS, FONT} from '../constants/Constants';
import {COLORS} from '../constants/Colors';

//Icons
import {ARROW_FORWARD} from '../constants/Icons';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Components
import Container from '../components/ui/Container';
import Text from '../components/basic/Text';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {requestCover} from '../redux-store/cover/cover.actions';

//Containers
import Loader from '../containers/Loader';

const Cover = () => {
  const navigation = useNavigation();
  const cover = useSelector(state => state.cover);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestCover());
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {cover.loading ? (
        <Loader />
      ) : (
        <ImageBackground
          style={styles.container}
          source={{
            uri: cover.cover.display,
          }}
          imageStyle={styles.container_image}>
          <View style={styles.content}>
            <View style={styles.label}>
              <Text size={16} family={FONT.medium} color={COLORS.dark_text}>
                News of the Day
              </Text>
            </View>
            <Text size={36} family={FONT.cover} color={COLORS.dark_text}>
              {cover.cover.title}
            </Text>
            <View style={styles.source}>
              <Text size={16} family={FONT.medium} color={COLORS.main}>
                {cover.cover.source}
              </Text>
            </View>
            <View style={styles.bottom}>
              <Pressable
                onPress={() =>
                  navigation.navigate('WebView', {
                    url: cover.cover.url,
                  })
                }
                style={styles.pressable}>
                <ARROW_FORWARD size={25} color={COLORS.dark_text} />
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    backgroundColor: COLORS.overlay,
    height: DIMENSIONS.height,
    justifyContent: 'center',
  },
  source: {
    marginVertical: 20,
  },
  label: {
    marginVertical: 20,
  },
  bottom: {
    padding: 20,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pressable: {
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cover;
