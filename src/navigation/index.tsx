import * as React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FiltersScreen from "../screens/FiltersScreen/FiltersScreen"
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen"
import SearchScreen from "../screens/SearchScreen/SearchScreen"
import HomeScreen from "../screens/HomeScreen/HomeScreen"
import { createStackNavigator } from '@react-navigation/stack';
import MediaScreenContainer from '../screens/MediaScreen/MediaScreen.container';
import { ApolloProvider } from "@apollo/client";
import { client } from '../graphqlClient';

// import HomeIcon from "../assets/icons/home.svg"

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator 
    screenOptions={{ headerTintColor: "#FFFFFF", headerStyle: { backgroundColor: "#6483DD" } }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Filters" component={FiltersScreen} />
    </SearchStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator 
    screenOptions={{ headerTintColor: "#FFFFFF", headerStyle: { backgroundColor: "#6483DD" } }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

function MediaStackScreen() {
  return (
    <HomeStack.Navigator 
    screenOptions={{ headerTintColor: "#FFFFFF", headerStyle: { backgroundColor: "#6483DD" } }}>
      <HomeStack.Screen name="Media" component={MediaScreenContainer} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Media" component={MediaStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Tabs" component={Tabs} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </ApolloProvider>
  );
}
