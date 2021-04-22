import React from 'react';
import MapsPage from './pages/MapPage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RoutesPage from './pages/RoutesPage';

const Tab = createBottomTabNavigator();

const Main: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="viewMaps">
          <Tab.Screen
            name="viewMaps"
            component={MapsPage}
            options={{
              tabBarLabel: 'View Maps',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="map" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="routesMaps"
            component={RoutesPage}
            options={{
              tabBarLabel: 'Routes',
              tabBarIcon: ({size}) => (
                <MaterialCommunityIcons
                  name="map"
                  size={size}
                  color="#0CA596"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Main;
