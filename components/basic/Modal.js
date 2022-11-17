import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Modal from 'react-native-modal';

//Components
import Text from './Text';
import Container from '../ui/Container';

//Redux
import {useSelector} from 'react-redux';

//Constants
import {DIMENSIONS, FONT} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';

const Modal_Component = ({show, toggleModal, children}) => {
  const theme = useSelector(state => state.theme);
  return (
    <Modal
      transparent={true}
      style={styles.modal}
      isVisible={show}
      onBackdropPress={toggleModal}
      backdropColor={COLORS.backdrop}>
      <View style={styles.modalView}>
        <View
          style={{
            ...styles.centeredView,
            backgroundColor:
              theme.mode == 'light'
                ? COLORS.light_background
                : COLORS.dark_background,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Modal_Component;
