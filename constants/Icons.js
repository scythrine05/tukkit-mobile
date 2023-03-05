import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

//Redux
import {useSelector} from 'react-redux';

//Colors
import {COLORS} from './Colors';

export const ARROW_FORWARD = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="arrow-forward-ios"
      size={size}
      color={color ? color : default_color}
      style={style}
    />
  );
};

export const ARROW_BACKWARD = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="arrow-back-ios"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const ARROW_BACKWAR_SMALL = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="keyboard-arrow-right"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const ARROW_FORWARD_SIMPLE = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="arrow-forward"
      size={size}
      color={color ? color : default_color}
      style={style}
    />
  );
};

export const ARROW_UPWARD_SIMPLE = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="arrow-upward"
      size={size}
      color={color ? color : default_color}
      style={style}
    />
  );
};

export const DONE = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="done"
      size={size}
      color={color ? color : default_color}
      style={style}
    />
  );
};

export const INFO = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <Feather
      name="info"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const MOON = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <Feather
      name="moon"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const NOTIFICATION = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <Feather
      name="bell"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};
export const HELP = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <Feather
      name="help-circle"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const SHAREAPP = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <Feather
      name="share"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const SHARE = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="share"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const FEEDBACK = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="messenger-outline"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const CONTACT = ({color, size, style}) => {
  const theme = useSelector(state => state.theme);
  const default_color =
    theme.mode == 'light' ? COLORS.light_small_text : COLORS.dark_small_text;

  return (
    <MaterialIcons
      name="smartphone"
      size={size}
      style={style}
      color={color ? color : default_color}
    />
  );
};

export const STAR = ({color, size, style}) => {
  return <Feather name="star" size={size} style={style} />;
};
