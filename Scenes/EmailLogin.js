import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry} from 'react-native';

export default class EmailLogin extends React.Component {
   render() {
       return (
           <Container style={{backgroundColor: '#f2f2f2'}}>
               <Content>
               <Header style={{backgroundColor: '#4a8bfc'}}>
                   <Button transparent onPress={() => this.props.navigator.push('login')}>
                       <Icon style={{color: 'white'}} name='ios-arrow-dropleft-outline' />
                   </Button>
                   
                   <Title style={{color: 'white'}}>Sign In</Title>
                   <Button transparent onPress={() => this.props.navigator.push('tabNav')}>
                       <Icon style={{color: 'white'}} name='ios-checkmark-circle-outline'/>
                   </Button>
               </Header>
                   <InputGroup style={styles.InputText} borderType='underline' >
                       <Input placeholder='First Name' />
                   </InputGroup>
                   <InputGroup style={styles.InputText} borderType='underline'>
                       <Input placeholder='Last Name'/>
                   </InputGroup>
                    <InputGroup style={styles.InputText} borderType='underline'>
                       <Input placeholder='Email'/>
                   </InputGroup>
                   <InputGroup style={styles.InputText} borderType='underline'>
                        <Input placeholder='Password' secureTextEntry/>
                    </InputGroup>
                    <Button style={styles.PasswordButton}>Forgot your Password?</Button> 
               </Content>
           </Container>
       );
   }
}

const styles = StyleSheet.create({
   InputText: {
       paddingVertical: 4,
       backgroundColor:'white',
   },
   PasswordButton: {
       backgroundColor: '#4a8bfc',
       flex: 1,
       alignSelf: 'center',

   }
})