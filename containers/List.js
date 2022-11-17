import React from 'react';
import {View, StyleSheet} from 'react-native';

//Components
import Container from '../components/ui/Container';
import ListItem from '../components/ui/ListItem';

const List = ({items}) => {
  return (
    <Container>
      <View style={styles.list}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            extraProps={item.extraProps}
            onPress={item.onPress}
            icon={item.icon}
          />
        ))}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    paddingTop: 50,
    padding: 20,
  },
});

export default List;
