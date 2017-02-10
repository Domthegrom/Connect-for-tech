import React, { Component } from 'react';
import { Container, Content, Card, CardItem, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header,Title, Thumbnail } from 'native-base';
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
          <Container style={{backgroundColor: 'white'}}>
          <Header style={{backgroundColor: '#4a8bfc', paddingVertical: 25, }}>
                   <Title style={{color: 'white'}}>Profile</Title>
                   <Button transparent onPress={() => this.props.navigator.push('profileC')}>
                       <Icon style={{color: 'white'}} name='ios-add-outline'/>
                   </Button>
               </Header>
               <Content>
                   <Card style={{ flex: 1}}>
                        <CardItem style ={{paddingVertical: 45}}>
                   <Thumbnail style={styles.ProfilePic}size={100} source={require('./dom.png')} />
                   <Button transparent onPress={() => this.props.navigator.push('profileC')}>
                       <Icon style={{color: '#4a8bfc'}} name='ios-add-outline'/>
                   </Button>
                            <Text note>Dominic Gozza</Text>
                            <Text note>Website Developer</Text>
                            <Text note>Jacksonville, Florida</Text>
                        </CardItem>
                   </Card>
               <List>
<<<<<<< HEAD
                  <Card>
                        <CardItem IconLeft button onPress={() => alert('hi')}>
                            <Icon style={{color: '#4a8bfc'}} name='ios-star'/>
                            <Text>Long Term Member</Text>
                        </CardItem>
                        </Card>
                    <Card>
                        <CardItem header>                        
                            <Text>Summary</Text>
                        </CardItem>

=======
                  <ListItem itemDivider >
                      <Text style={styles.DividerText}>Summary</Text>
                  </ListItem> 

                   <Card>
>>>>>>> 6d0361cee879e35607e85972cd175c370c28b12a
                        <CardItem button onPress={() => this.props.navigator.push('profileC')}>
                            <Text note style={styles.PlacerText}>Tap here to edit Summary</Text>
                        </CardItem>
                   </Card>

                    <ListItem itemDivider>
                      <Text style={styles.DividerText}>Experience</Text>
                   </ListItem>  
                   
                   <Card>
                        <CardItem button onPress={() => this.props.navigator.push('profileC')}>
                            <Text note style={styles.PlacerText}>Tap here to edit Experience</Text>
                        </CardItem>
                   </Card>
                   <ListItem itemDivider>
                      <Text style={styles.DividerText}>Education</Text>
                   </ListItem>
                   <Card>
                        <CardItem button onPress={() => this.props.navigator.push('profileC')}>
                            <Text note style={styles.PlacerText}>Tap here to edit Education</Text>
                        </CardItem>
                   </Card>
                   <ListItem itemDivider>
                      <Text style={styles.DividerText}>Key Skills</Text>
                   </ListItem>
                   <Card>
                        <CardItem button onPress={() => this.props.navigator.push('profileC')}>
                            <Text note style={styles.PlacerText}>Tap here to edit Key Skills</Text>
                        </CardItem>
                   </Card>
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
   PlacerText: {
       color: '#4a8bfc'
   },
   ProfileName: {
        paddingVertical: 16,
        justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center', 
   }
})


//Will pull linkedin profile skills summary maybe resume... But take it all even profile picture!
