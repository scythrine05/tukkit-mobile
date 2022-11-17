import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

//Constants
import {FONT} from '../../constants/Constants';
import {ARROW_BACKWAR_SMALL} from '../../constants/Icons';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Components
import Text from '../basic/Text';

const ListItem = ({icon, title, extraProps, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles._list}>
        <View style={styles._list_content}>
          {icon}
          <View style={styles._list_text}>
            <Text size={15} family={FONT.regular}>
              {title}
            </Text>
          </View>
        </View>
        {extraProps ? extraProps : <ARROW_BACKWAR_SMALL size={22} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  _list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  _list_content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  _list_text: {
    paddingLeft: 10,
    marginTop: 20,
    paddingBottom: 20,
  },
});

export default ListItem;
