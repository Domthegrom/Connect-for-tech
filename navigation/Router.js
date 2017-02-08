import Exponent from "exponent";
import React from "react";
import {StyleSheet,Text,View,Navigator,AppRegistry} from "react-native";
import {createRouter,NavigationProvider,StackNavigation} from "@exponent/ex-navigation";
import Feed from "../Scenes/Feed";
import LoginPage from "../Scenes/LoginPage";
import Profile from '../Scenes/Profile';
import EmailLogin from '../Scenes/EmailLogin';
import NavigationTab from './NavigationTab';
import Matches from '../Scenes/Matches';
import Settings from '../Scenes/Settings';
import TermsOfUse from '../Scenes/TermsOfUse';
import PrivacyPolicy from '../Scenes/PrivacyPolicy';
import ProfileCreator from '../Scenes/ProfileCreator';


export default createRouter(() => ({
    login: () => LoginPage, 
    feed: () => Feed, 
    profile: () => Profile,
    emailLogin: () => EmailLogin,
    matches: () => Matches,
    settings: () => Settings,
    tabNav: () => NavigationTab,
    terms: () => TermsOfUse,
    privacy: () => PrivacyPolicy,
    profileC: () => ProfileCreator,
  })
); 