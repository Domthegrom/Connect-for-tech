import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry} from 'react-native';

export default class Matches extends React.Component {
 static route = {
    NavigationTab: {
      title: 'matches',
    },
  }

    render() {
        return (
          <View>
          <Text>All conversations will be held here!!!</Text>
          </View>
            
        );
    }
}


//https://github.com/FaridSafi/react-native-gifted-chat this can be of help marcello!