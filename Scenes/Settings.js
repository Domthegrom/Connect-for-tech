import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Header, Button, List, ListItem, Icon, Badge,Title} from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry,} from 'react-native';


export default class Settings extends React.Component {

   static route = {
    NavigationTab: {
      title: 'Settings',
    },
  }
    render() {
        return (
             <Container>
              <Header style={{backgroundColor: '#4a8bfc'}}>
               <Title style={{color: 'white'}}>Settings</Title>
               </Header>
                <Content style={{backgroundColor: '#f2f2f2'}}>
                    <List>  
                        <ListItem iconRight>
                         <Icon name="ios-arrow-round-forward" style={{ color: '#4a8bfc' }} />
                            <Text>Invite Friends</Text>
                        </ListItem>
                        <ListItem iconRight>
                        <Icon name="ios-arrow-round-forward" style={{ color: '#4a8bfc' }} />
                            <Text>Terms of Usage</Text>
                        </ListItem>
                        <ListItem iconRight>
                        <Icon name="ios-arrow-round-forward" style={{ color: '#4a8bfc' }} />
                            <Text>Privacy Policy</Text>
                        </ListItem>
                          <ListItem iconRight>
                          <Icon name="ios-arrow-round-forward" style={{ color: '#4a8bfc' }} />
                            <Text>Rate Connections!</Text>
                        </ListItem>
                          <ListItem iconRight>
                          <Icon name="ios-arrow-round-forward" style={{ color: '#4a8bfc' }} />
                            <Text>Sign Out</Text>
                        </ListItem>
                          <ListItem iconRight>
                          <Icon name="ios-arrow-round-forward" style={{ color: '#4a8bfc' }} />
                            <Text style={{color: 'red'}}>Delete My Account</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
   StartedB: {
     alignItems: 'center', 
     alignSelf: 'center',
   },
   TextOne: {
     fontSize: 24, 
     paddingVertical: 20,
     color: 'white', 
     alignItems: 'center', 
     alignSelf: 'center',
   },
   TextTwo: {
     fontSize: 18, 
     color: 'white', 
     paddingVertical: 25,
     alignItems: 'center', 
     alignSelf: 'center',
   }
}) 