import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { ProfileScreen, ListScreen, ActivityScreen, MessageScreen } from './screens'
import { Feather } from '@expo/vector-icons'
import { Sidebar } from './components/Sidebar'

const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen : {
      screen: ProfileScreen,
      navigationOptions: {
        title : "Profile",
        drawerIcon : ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />  
      }
    }, 
    MessageScreen: {
      screen: MessageScreen,
      navigationOptions: {
        title : "Messages",
        drawerIcon : ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />  
      }
    }, 
    ListScreen: {
      screen: ListScreen,
      navigationOptions: {
        title : "List",
        drawerIcon : ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />  
      }
    }, 
    ActivityScreen : {
      screen: ActivityScreen,
      navigationOptions: {
        title : "Activity",
        drawerIcon : ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />  
      }
    }
  },
  {
    contentComponent : props => <Sidebar {...props} />,
    drawerWidth : Dimensions.get("window").width * 0.85,
    hideStatusBar : true,
    contentOptions : {
      activeBackgroundColor : "rgba(212, 118, 207, 0.2)",
      activeTintColor : "#531158",
      itemsContainerStyle : {
        marginTop : 18,
        marginHorizontal : 8
      },
      itemStyle : {
        borderRadius : 4
      }
    }
  }
  );

export default createAppContainer(DrawerNavigator);
