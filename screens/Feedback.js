import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Lottie from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';

//Constants
import {DIMENSIONS, FONT} from '../constants/Constants';
import {COLORS} from '../constants/Colors';

//Components
import Container from '../components/ui/Container';
import Text from '../components/basic/Text';
import Ratings from '../components/ui/Rating';
import TextInput from '../components/basic/TextInput';
import Button from '../components/basic/Button';
import Modal from '../components/basic/Modal';

//Icons
import {STAR} from '../constants/Icons';

const Feedback = () => {
  const [rating, setRating] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleButton = async (text, rating) => {
    try {
      setShow(true);
      setLoading(true);
      await firestore().collection('feedback').add({
        message: text,
        rating: rating,
        created: Date.now(),
      });
    } catch (error) {
      console.error('Feedback:', error);
    }
    setLoading(false);
    setText(null);
    setRating(0);
  };

  return (
    <React.Fragment>
      <Modal show={show} toggleModal={() => setShow(prev => !prev)}>
        {loading ? (
          <ActivityIndicator
            size={50}
            styles={styles.loading}
            color={COLORS.main}
          />
        ) : (
          <Lottie
            source={require('../assets/animations/feedback.json')}
            autoPlay
            speed={2}
            loop={false}
            style={styles.animation}
          />
        )}
        {loading ? null : (
          <Text size={14} family={FONT.regular}>
            Thanks for your feedback
          </Text>
        )}
      </Modal>
      <Container>
        <View style={styles.main}>
          <Text size={26} family={FONT.light}>
            Rate Your Experience
          </Text>
          <Ratings onRate={rate => setRating(rate)} />
          <Text size={14} family={FONT.regular}>
            Tell us what can be improved
          </Text>
          <View style={styles.text_container}>
            <TextInput
              style={styles.text}
              placeholder={'Tell us how we can improve'}
              multiline={true}
              numberOfLines={8}
              onChangeText={value => setText(value)}
              value={text}
            />
          </View>
          <Button
            onPress={() => handleButton(text, rating)}
            text={'Send the Feedback'}
            disabled={rating && text ? false : true}
          />
        </View>
      </Container>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
  text_container: {
    paddingVertical: 20,
  },
  text: {
    padding: 20,
  },
  animation: {
    height: DIMENSIONS.height / 4,
    width: DIMENSIONS.width / 4,
  },
});

export default Feedback;
