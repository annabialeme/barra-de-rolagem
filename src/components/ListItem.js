import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
});

export default ListItem;
