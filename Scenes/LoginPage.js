import Exponent from 'exponent';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, AppRegistry,} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Header} from 'native-base';
import { Ionicons } from '@exponent/vector-icons';
import Router from '../navigation/Router';


export default class LoginPage extends React.Component {
   render() {
       return (
           <View  style={styles.container}>
                <View style={styles.mainLogo}>
                <Image source={require('./logo.png')}/>
                </View>
                <Button source={require('./SignIn.png')} style={styles.LinkedinB} onPress={() => this.props.navigator.push('profileCreator')}>
                   <Text style={{flex: 1}}>Login</Text>                 
                 </Button>
                 <Text  onPress={() => this.props.navigator.push('emailLogin')} style={{padding:10, alignSelf: 'center', paddingVertical: 25,fontSize: 15,}}>Login with Email</Text>
                <Text style={styles.loginTerms}> By Creating an Account with Connections,</Text>
                <Text style={styles.loginTerms}> I agree to
                   <Text style={{color: 'red'}}> Terms of Use</Text> and
                   <Text style={{color:'red'}}> Privacy Policy</Text>
                </Text>
           </View>
       );
   }
}
//The Red text (terms of use) and (Privacy policy) will have to be links to my website regarding this information.
const styles = StyleSheet.create({
   loginTerms: {
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center', 
       paddingVertical: 0,
       fontSize: 10,
       fontWeight: '100',
       },
   container: {
       flex: 1,
       flexDirection: 'column', 
       justifyContent: 'center', 
       alignItems: 'stretch', 
       paddingHorizontal: 20,
   },
   LinkedinB: {
       padding:10, 
       flexDirection: 'row',
        alignItems: 'center', 
        alignSelf: 'center',
        paddingRight: 75,
        paddingLeft: 75,
        backgroundColor: '#006fa6',
   },
   mainLogo: {
       paddingVertical: 200,
   }
}) 