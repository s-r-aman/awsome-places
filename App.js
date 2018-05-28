import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlacesScreen from './src/screens/SharePlace/SharePlace';
import FindPlacesScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent(
  'awesome-places.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.SharePlacesScreen',
  () => SharePlacesScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.FindPlacesScreen',
  () => FindPlacesScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.PlaceDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'awesome-places.SideDrawer',
  () => SideDrawer,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login'
  }
});
