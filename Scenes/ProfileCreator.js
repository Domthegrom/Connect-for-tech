import React, { Component } from 'react';
import { Container, Content,Card,CardItem, List, ListItem, InputGroup, Thumbnail, Input, Icon, Text, Picker, Button, Header,Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry} from 'react-native';

export default class ProfileCreator extends React.Component {
    render() {
        return (
            <Container>
           <Header style={{backgroundColor: '#4a8bfc'}}>                   
                   <Title style={{color: 'white'}}>Profile Creator</Title>
                   <Button transparent onPress={() => this.props.navigator.push('profile')}>
                       <Icon style={{color: 'white'}} name='ios-arrow-dropleft-outline'/>
                   </Button>
               </Header>
               <Content>
                   <Thumbnail style={styles.ProfilePic}size={100} source={require('./dom.png')} />
                    <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="Dominic" />
                            </InputGroup>
                        </ListItem>

                         <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="Last Name" placeholder="Gozza" />
                            </InputGroup>
                        </ListItem>
               </Content>
          </Container>
        );
    }
}

const styles = StyleSheet.create ({
    ProfilePic: {
         justifyContent: 'center',
         alignItems: 'center',
         alignSelf: 'center', 
         paddingVertical: 50,
    },
    TextFields: {
        paddingVertical: 15
    }
})
