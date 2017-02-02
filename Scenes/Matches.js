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
          <Container>
          <Header style={{backgroundColor: '#4a8bfc'}}>
          <Title style={{color: 'white'}}> Matches </Title>
               </Header>
          </Container>
        );
    }
}


//https://github.com/FaridSafi/react-native-gifted-chat this can be of help marcello!