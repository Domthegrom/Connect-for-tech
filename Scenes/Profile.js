import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, AppRegistry} from 'react-native';
import { FontAwesome } from '@exponent/vector-icons';

//The Image below witch is just below the header currently will be the profile picture transfered from linkedin
// Or whatever photo they choose to put there from photo library.
// We will want to grab all information that we can possible get from linkedin when user signs in through linkedin.
 
 
export default class Profile extends React.Component {
static route = {
    NavigationTab: {
      title: 'profile',
    },
  }

    render() {
        return (
          <Container style={{backgroundColor: '#f2f2f2'}}>
               <Content>
               <Header style={{backgroundColor: '#4a8bfc'}}>

                   <Title style={{color: 'white'}}>Profile Info</Title>
               </Header>
               <List>
                  <Image style={styles.ProfilePic}source={require('./logo.png')}/> 
                  <ListItem itemDivider>
                      <Text style={styles.DividerText}>Summary</Text>
                  </ListItem> 
                   <InputGroup style={styles.InputText} borderType='underline' >
                       <Input placeholder='' />
                   </InputGroup>
                    <ListItem itemDivider>
                      <Text style={styles.DividerText}>Experience</Text>
                   </ListItem>
                   <InputGroup style={styles.InputText} borderType='underline'>
                       <Input placeholder=''/>
                   </InputGroup>
                   <ListItem itemDivider>
                      <Text style={styles.DividerText}>Education</Text>
                   </ListItem>
                   <InputGroup style={styles.InputText} borderType='underline'>
                       <Input placeholder=''/>
                   </InputGroup>
                   <ListItem itemDivider>
                      <Text style={styles.DividerText}>Key Skills</Text>
                   </ListItem>
                   </List>
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
   },
   ProfilePic: {

   },
   DividerText: {
     fontSize: 12,
     color: '#b2b2b2'
   }
})


//Will pull linkedin profile skills summary maybe resume... But take it all even profile picture!
