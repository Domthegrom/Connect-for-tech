import Exponent from "exponent";
import React from "react";
import {StyleSheet,Text,View,Navigator,AppRegistry} from "react-native";
import {createRouter,NavigationProvider,StackNavigation} from "@exponent/ex-navigation";
import firebase from "firebase";
import LoginPage from './Scenes/LoginPage';
import Router from './navigation/Router';

class App extends React.Component {
 render() {
   return (
     <NavigationProvider router={Router}>
       <StackNavigation initialRoute={Router.getRoute("login")} />
     </NavigationProvider>
   );
 }
}

AppRegistry.registerComponent("main", () => App);