import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title, Thumbnail } from 'native-base';
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
          <Header style={{backgroundColor: '#4a8bfc', paddingVertical: 15,}}>

                   <Title style={{color: 'white'}}>Profile Info</Title>
               </Header>
               <Content>
                   <Thumbnail style={styles.ProfilePic}size={100} source={require('./dom.png')} />
                 <Text style={styles.ProfileName}>Dominic Gozza</Text>
               <List>
<<<<<<< HEAD
=======
                 <Thumbnail style={styles.ProfilePic}size={100} source={require('./dom.png')} />
                 <Text style={styles.ProfileName}>Dominic Gozza</Text>
>>>>>>> ef33e7d014e539d6f99dc39271e28d604b526a6b
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
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center', 
   },
   DividerText: {
     fontSize: 12,
     color: '#b2b2b2'
   },
   ProfileName: {
        paddingVertical: 16,
        justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center', 
   }
})


//Will pull linkedin profile skills summary maybe resume... But take it all even profile picture!
