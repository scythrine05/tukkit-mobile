import {View, StyleSheet} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';

//Screens
import News from './News';
import Options from './Options';
import Recents from './Recents';

export default function Pager() {
  return (
    <>
      <PagerView style={styles.pagerView} initialPage={1}>
        <View>
          <Options />
        </View>
        <View>
          <News />
        </View>
      </PagerView>
    </>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
