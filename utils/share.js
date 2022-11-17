import Share from 'react-native-share';

export const share = async message => {
  try {
    const result = await Share.open({
      message: message,
    });
  } catch (error) {
    console.error('Share: ', error.message);
  }
};

export const shareImage = async (uri, message) => {
  try {
    const result = await Share.open({
      url: uri,
      message: message,
      type: 'image/jpeg',
    });
  } catch (error) {
    console.error('Share: ', error.message);
  }
};
