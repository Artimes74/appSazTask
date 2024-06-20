import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/home';
import Add from '../screens/add/add';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Text} from 'react-native-svg';
import {SPACE} from '../utils/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {AddIcon, HomeIcon} from '../assets/iconPack/bottomPack';

type BOTTOM_NAVIGATION_TYPE = {
  home: undefined;
  add: undefined;
};

const BottomStack = createBottomTabNavigator<BOTTOM_NAVIGATION_TYPE>();

export default () => (
  <NavigationContainer>
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomStack.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: () => {
            return <Text></Text>;
          },
          tabBarIcon: ({color, size}) => (
            <HomeIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <BottomStack.Screen
        name="add"
        component={Add}
        options={{
          tabBarLabel: () => {
            return <Text></Text>;
          },
          tabBarIcon: ({color, size}) => (
            <AddIcon width={size * 1.5} height={size * 1.5} color={color} />
          ),
        }}
      />
    </BottomStack.Navigator>
  </NavigationContainer>
);
