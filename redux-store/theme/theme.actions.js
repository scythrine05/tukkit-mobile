import {THEME_CHANGE, CURRENT_THEME} from '../../constants/Constants';
import {storeData, getData} from '../../utils/async_storage';

export const switchMode = mode => {
  return {
    type: THEME_CHANGE,
    payload: mode,
  };
};

export const checkTheme = () => {
  return async dispatch => {
    try {
      const theme = await getData(CURRENT_THEME);
      if (theme) dispatch(switchMode(theme));
    } catch (error) {
      console.error('Redux_Theme:', error);
    }
  };
};

export const setTheme = mode => {
  return async dispatch => {
    try {
      await storeData(CURRENT_THEME, mode);
      dispatch(switchMode(mode));
    } catch (error) {
      console.error('Redux_Theme:', error);
    }
  };
};
