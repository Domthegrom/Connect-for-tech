import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Header, Button} from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry,} from 'react-native';


export default class Feed extends React.Component {

   static route = {
    NavigationTab: {
      title: 'post',
    },
  }
    render() {
        return (
            <Container>
            <Header style={{backgroundColor: '#4a8bfc'}}>
               </Header>
                <Content>
                    <Card style={{backgroundColor: '#4a8bfc'}}>
                        <CardItem>                        
                            <Text style={styles.TextOne}>
                                Post your Profile for Free!
                            </Text>
                            <Text style={styles.TextTwo}>
                            Get hired by people in need of your skills! In our 7-day free trial.
                            </Text>
                            <Button large style={styles.StartedB}>
                                  Get Started
                            </Button>
                        </CardItem>
                    </Card>
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