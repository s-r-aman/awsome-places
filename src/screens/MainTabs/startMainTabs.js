import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

export default () => {
  Promise.all([
    Icons.getImageSource('ios-map-outline', 30),
    Icons.getImageSource('ios-share-outline', 30),
    Icons.getImageSource('ios-menu-outline', 30)
  ]).then(([mapIcon, shareIcon, menuIcon]) => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlacesScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: mapIcon,
          navigatorButtons: {
            rightButtons: [
              { icon: menuIcon, title: 'Menu', id: 'sideDrawerToggle' }
            ]
          }
        },
        {
          screen: 'awesome-places.SharePlacesScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: shareIcon,
          navigatorButtons: {
            rightButtons: [
              { icon: menuIcon, title: 'Menu', id: 'sideDrawerToggle' }
            ]
          }
        }
      ],
      drawer: {
        right: { screen: 'awesome-places.SideDrawer' }
      }
    });
  });
};
