import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry} from 'react-native';

export default class Post extends React.Component {
 static route = {
    NavigationTab: {
      title: 'post',
    },
  }

    render() {
        return (
          <View>
          <Text>This is where you post your profile! You can create a profile and post it for a 7-day free trial
          after that you will be charged at the monthly rate
          </Text>
          </View>
            
        );
    }
}

//https://github.com/FaridSafi/react-native-gifted-chat this can be of help marcello!