import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Constants
import {ARROW_BACKWARD} from '../../constants/Icons';
import {DIMENSIONS, FONT} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';

//Components
import Container from '../ui/Container';
import Text from '../basic/Text';

const headerStyles = new Map([
  ['route', {justifyContent: null, fontSize: 18, fontStyle: FONT.medium}],
  [
    'webview',
    {
      justifyContent: 'space-between',
      fontSize: 11,
      fontStyle: FONT.regular,
    },
  ],
  ['noroute', {justifyContent: 'center', fontSize: 18, fontStyle: FONT.medium}],
]);

export default function Header({route, type, name}) {
  const navigation = useNavigation();

  return (
    <Container
      style={{
        ...styles.container,
        justifyContent: headerStyles.get(type).justifyContent,
      }}
      height={DIMENSIONS.height / 15}>
      {type !== 'noroute' ? (
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.icon}>
            <ARROW_BACKWARD size={20} />
          </View>
        </Pressable>
      ) : null}
      <View>
        <Text
          size={headerStyles.get(type).fontSize}
          family={headerStyles.get(type).fontStyle}>
          {name ? name : route.name}
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 10,
  },
});
