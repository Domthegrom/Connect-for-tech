import Exponent from "exponent";
import React from "react";
import {StyleSheet,Text,View,Navigator,AppRegistry} from "react-native";
import {createRouter,NavigationProvider,StackNavigation} from "@exponent/ex-navigation";
import Feed from "../Scenes/Feed";
import LoginPage from "../Scenes/LoginPage";
import ProfileCreator from "../Scenes/ProfileCreator";
import Profile from '../Scenes/Profile';
import EmailLogin from '../Scenes/EmailLogin';
import NavigationTab from './NavigationTab';
import Matches from '../Scenes/Matches';
import Settings from '../Scenes/Settings';


export default createRouter(() => ({
    login: () => LoginPage, 
    profileCreator: () => ProfileCreator, 
    feed: () => Feed, 
    profile: () => Profile, 
    login: () => LoginPage, 
    emailLogin: () => EmailLogin,
    matches: () => Matches,
    settings: () => Settings,
    tabNav: () => NavigationTab,
  })
); 