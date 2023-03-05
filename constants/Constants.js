import {Platform, Dimensions} from 'react-native';

export const OS = Platform.OS;

export const DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const FONT = {
  extra_light: 'Mulish-ExtraLight',
  light: 'Mulish-Light',
  regular: 'Mulish-Regular',
  medium: 'Mulish-Medium',
  semi_bold: 'Mulish-SemiBold',
  bold: 'Mulish-Bold',
  extra_bold: 'Mulish-ExtraBold',
  cover: 'Mulish-Regular',
};

//Redux Constants
export const THEME_CHANGE = 'THEME_CHANGE';
export const CURRENT_THEME = 'CURRENT_THEME';
export const BACKGROUND_CHANGE = 'BACKGROUND_CHANGE';
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAIL = 'GET_POST_FAIL';
export const LISTEN_POST = 'LISTEN_POST';
