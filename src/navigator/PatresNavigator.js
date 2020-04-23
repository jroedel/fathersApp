import React from 'react';

import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import {
  Platform, SafeAreaView, Image, View, Text,
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import PatreDetailScreen from '../screens/PatreDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import PrayersScreen from '../screens/PrayersScreen';
import PrayerScreen from '../screens/PrayerScreen';
import CommunityScreen from '../screens/CommunityScreen';
import FiliationDetailScreen from '../screens/FiliationDetailScreen';
import DelegationDetailScreen from '../screens/DelegationDetailScreen';


const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.surfaceColorPrimary,
  },
  headerTitleStyle: {
    fontFamily: 'work-sans-semibold',
  },
  headerBackTitle: {
    fontFamily: 'work-sans',
  },
  headerTintColor: Colors.onSurfaceColorPrimary,
};


const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: '',
    },
  },
  PatreDetail: {
    screen: PatreDetailScreen,
  },
  Prayers: {
    screen: PrayersScreen,
  },
  Prayer: {
    screen: PrayerScreen,
  },

}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const SearchNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
  },
  PatreDetail: {
    screen: PatreDetailScreen,
  },
}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        console.log(tabInfo);
        return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.surfaceColorPrimary,
    },
  },
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: (tabInfo) => <Ionicons name="ios-search" size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.secondaryColor,
    },
  },
};

const HomeSearchTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: Colors.primaryColor,
  shifting: true,
  barStyle: {
    backgroundColor: Colors.surfaceColorPrimary,
  },
});
const ProfileNavigator = createStackNavigator({
  screen: PatreDetailScreen,
}, {
  navigationOptions: {

  },
  defaultNavigationOptions: defaultStackNavOptions,
});

const CommunityNavigator = createStackNavigator({
  Comunidad: {
    screen: CommunityScreen,
    navigationOptions: {
      headerTitle: 'Comunidad Oficial',
    },
  },
  FiliationDetail: {
    screen: FiliationDetailScreen,
  },
  DelegationDetail: {
    screen: DelegationDetailScreen,
  },

}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const MainNavigator = createDrawerNavigator({
  HomeSearch: {
    screen: HomeSearchTabNavigator,
    navigationOptions: {
      drawerLabel: 'Principal',
    },
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },
  Community: {
    screen: CommunityNavigator,
    navigationOptions: {
      drawerLabel: 'Comunidad Oficial',
    },
  },


}, {
  contentComponent: (props) => <DefaultDrawer {...props} />,
  drawerBackgroundColor: Colors.primaryColor,
  contentOptions: {
    activeTintColor: Colors.secondaryColor,
    inactiveTintColor: Colors.surfaceColorPrimary,
    labelStyle: {
      fontFamily: 'work-sans-semibold',
      fontSize: 18,
    },
  },
});

export default createAppContainer(MainNavigator);

const DefaultDrawer = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ margin: 15, padding: 15 }}
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      >
        <Ionicons name="md-close" size={36} color={Colors.surfaceColorPrimary} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{
        justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%', padding: 15,
      }}
      >


        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
          <Image source={require('../../assets/img/icono.png')} style={{ width: 88, height: 88 }} />
          <Text
            numberOfLines={2}
            style={{
              width: '70%', fontSize: 18, fontFamily: 'work-sans', color: 'white', paddingHorizontal: 15,
            }}
          >
            Padres de Schoenstatt
          </Text>
        </View>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};
