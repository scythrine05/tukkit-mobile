import {Platform, Dimensions} from 'react-native';

export const OS = Platform.OS;

export const DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const FONT = {
  extra_light: 'NotoSansDisplay-ExtraLight',
  light: 'NotoSansDisplay-Light',
  regular: 'NotoSansDisplay-Regular',
  medium: 'NotoSansDisplay-Medium',
  semi_bold: 'NotoSansDisplay-SemiBold',
  bold: 'NotoSansDisplay-Bold',
  extra_bold: 'NotoSansDisplay-ExtraBold',
  cover: 'Marcellus-Regular',
};

//Redux Constants
export const THEME_CHANGE = 'THEME_CHANGE';
export const CURRENT_THEME = 'CURRENT_THEME';
export const BACKGROUND_CHANGE = 'BACKGROUND_CHANGE';
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAIL = 'GET_POST_FAIL';
export const GET_COVER = 'GET_COVER';
export const GET_COVER_SUCCESS = 'GET_COVER_SUCCESS';
export const GET_COVER_FAIL = 'GET_COVER_FAIL';
