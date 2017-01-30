import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry} from 'react-native';

const Item = Picker.Item;

export default class ProfileCreator extends Component {
   render() {
       return (
           <Container style={{backgroundColor: '#f2f2f2'}}>
               <Content>
               <Header style={{backgroundColor: '#4a8bfc'}}>
                   <Button transparent onPress={() => this.props.navigator.replace('tabNav')}>
                       <Icon style={{color: 'white'}} name='ios-arrow-dropleft-outline' />
                   </Button>
                   
                   <Title style={{color: 'white'}}>Profile Info</Title>
                   
                   <Button transparent onPress={() => this.props.navigator.replace('tabNav')}>
                       <Icon style={{color: 'white'}} name='ios-checkmark-circle-outline'/>
                   </Button>
               </Header>
                   <Text style={styles.topText}>Fill out the fields below to begin creating your profile! Attach your resume later for a better profile</Text>
                   <InputGroup style={styles.InputText} borderType='underline' >
                       <Input placeholder='First Name' />
                   </InputGroup>
                   <InputGroup style={styles.InputText} borderType='underline'>
                       <Input placeholder='Last Name'/>
                   </InputGroup>
                   <InputGroup style={styles.InputText} borderType='underline'>
                       <Input placeholder='Phone Number'/>
                   </InputGroup>
                    <InputGroup style={styles.InputText} borderType='underline'>
                       <Input placeholder='Email'/>
                   </InputGroup>
                   <InputGroup  style={styles.InputText} iconRight borderType='underline'>
                       <Icon name='ios-navigate-outline' style={{color:'#4169e1'}}/>
                       <Input placeholder='Location'/>
                   </InputGroup>
                    <InputGroup  style={styles.InputText} borderType='underline'>
                       <Input placeholder='Education'/>
                   </InputGroup>
               </Content>
           </Container>
       );
   }
}

const styles = StyleSheet.create({
   topText: {
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center', 
       paddingVertical: 50,

   },
   InputText: {
       paddingVertical: 4,
       backgroundColor:'white',
   }
})