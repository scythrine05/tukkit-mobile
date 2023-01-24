import React from 'react';
import {Switch} from 'react-native-switch';

//Constants
import {COLORS} from '../../constants/Colors';

const Switch_Component = ({initState, onValueChange}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  React.useEffect(() => {
    let mount = true;
    if (mount) setIsEnabled(initState);
    return () => {
      mount = false;
    };
  }, [initState]);

  const toggleSwitch = () => {
    onValueChange();
    setIsEnabled(prev => !prev);
  };

  return (
    <Switch
      onValueChange={toggleSwitch}
      value={isEnabled}
      disabled={false}
      circleSize={20}
      barHeight={20}
      backgroundActive={COLORS.gray_white}
      backgroundInactive={COLORS.gray_black}
      circleActiveColor={COLORS.main}
      circleInActiveColor={COLORS.gray_white}
      changeValueImmediately={true}
      circleBorderWidth={1}
      innerCircleStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: isEnabled ? COLORS.gray_white : COLORS.gray_black,
      }}
      renderActiveText={false}
      renderInActiveText={false}
      switchWidthMultiplier={2}
    />
  );
};

export default Switch_Component;
