import {View, StyleSheet} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

//Constants
import {COLORS} from '../constants/Colors';
import {FONT, DIMENSIONS} from '../constants/Constants';

//Components
import Container from '../components/ui/Container';
import Text from '../components/basic/Text';

export default function Loader() {
  return (
    <Container style={styles.container}>
      <Lottie
        source={require('../assets/animations/end.json')}
        autoPlay
        speed={3}
        style={styles.animation}
      />
      <Text family={FONT.regular} style={styles.text} size={19}>
        Loading Latest News
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: COLORS.dark,
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
  },
  animation: {
    height: DIMENSIONS.height / 4,
    width: DIMENSIONS.width / 4,
  },
});
