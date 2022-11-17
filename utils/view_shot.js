import {captureScreen} from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import {shareImage} from './share';

export const shotAndShare = async () => {
  const message =
    'Get business and startup news instantly with Tukkit, Download now https://tukkit.com';
  try {
    const uri = await captureScreen({
      fileName: 'news',
      format: 'jpg',
      quality: 0.9,
    });
    await shareImage(uri, message);
  } catch (error) {
    console.error('ScreenShot: ', error);
  }
};
