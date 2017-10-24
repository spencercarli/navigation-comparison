import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Screen1, Screen2, Screen3, Screen4 } from './screens';
import Icon from 'react-native-vector-icons/Ionicons';

const prepareIcons = async () => {
  const icons = await Promise.all([
    Icon.getImageSource('ios-home', 26),
    Icon.getImageSource('ios-home-outline', 26),
    Icon.getImageSource('ios-person', 26),
    Icon.getImageSource('ios-person-outline', 26),
  ]);
  const [home, homeOutline, person, personOutline] = icons;
  return { home, homeOutline, person, personOutline };
}

const registerScreens = () => {
  Navigation.registerComponent('example.List', () => Screen1);
  Navigation.registerComponent('example.Details', () => Screen2);
  Navigation.registerComponent('example.Profile', () => Screen3);
  Navigation.registerComponent('example.Friends', () => Screen4);
};

export default startApp = async () => {
  const icons = await prepareIcons();
  registerScreens();

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'example.List',
        icon: icons.homeOutline,
        selectedIcon: icons.home,
        title: 'List'
      },
      {
        label: 'Profile',
        screen: 'example.Profile',
        icon: icons.personOutline,
        selectedIcon: icons.person,
        title: 'Profile'
      }
    ]
  });
};
