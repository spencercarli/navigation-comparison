import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 33,
    fontWeight: '500',
  },
});

export const Screen1 = ({ navigation }) => (
  <View style={[styles.container, { backgroundColor: '#183642' } ]}>
    <Text style={styles.text}>Screen 1</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

export const Screen2 = ({ navigation }) => (
  <View style={[styles.container, { backgroundColor: '#FF6666' } ]}>
    <Text style={styles.text}>Screen 2</Text>
  </View>
);

export const Screen3 = ({ navigation }) => (
  <View style={[styles.container, { backgroundColor: '#5D2E8C' } ]}>
    <Text style={styles.text}>Screen 3</Text>
    <Button
      title="Go to Friends"
      onPress={() => navigation.navigate('Friends')}
    />
  </View>
);

export const Screen4 = ({ navigation }) => (
  <View style={[styles.container, { backgroundColor: '#2EC4B6' } ]}>
    <Text style={styles.text}>Screen 4</Text>
  </View>
);
