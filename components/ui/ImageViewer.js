import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageView from 'react-native-image-viewing';

//Components
import Text from '../basic/Text';

//Constants
import {COLORS} from '../../constants/Colors';
import {FONT} from '../../constants/Constants';

export default function ImageViewer({image, visible, setVisible, footer}) {
  return (
    <ImageView
      images={[image]}
      imageIndex={0}
      visible={visible}
      onRequestClose={setVisible}
      FooterComponent={() => (
        <View style={styles.footer}>
          <Text
            size={14}
            family={FONT.regular}
            color={COLORS.dark_text}
            style={{textAlign: 'center'}}>
            {footer}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
  },
});
