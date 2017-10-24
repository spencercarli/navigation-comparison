import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Screen1, Screen2, Screen3, Screen4 } from './screens';

const Stack1 = StackNavigator({
  List: {
    screen: Screen1,
    navigationOptions: {
      headerTitle: 'List',
    }
  },
  Details: {
    screen: Screen2,
    navigationOptions: {
      headerTitle: 'Details',
    }
  },
});

const Stack2 = StackNavigator({
  Profile: {
    screen: Screen3,
    navigationOptions: {
      headerTitle: 'Profile',
    }
  },
  Friends: {
    screen: Screen4,
    navigationOptions: {
      headerTitle: 'Friends',
    }
  },
});

const Tabs = TabNavigator({
  Home: {
    screen: Stack1,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Profile: {
    screen: Stack2,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
});

export default class App extends React.Component {
  render() {
    return <Tabs />;
  }
}
