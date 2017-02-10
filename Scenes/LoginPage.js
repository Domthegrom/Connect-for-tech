import Exponent from 'exponent';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, AppRegistry,} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Header} from 'native-base';
import { Ionicons } from '@exponent/vector-icons';
import Router from '../navigation/Router';


export default class LoginPage extends React.Component {
   render() {
    return (
      <View  style={[styles.container, {paddingHorizontal: 20}]}>
        <View style={styles.container}>
          <Image source={require('./logo.png')}/>
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity onPress={() => console.log('login facebook')}>
              <View style={[styles.button, {backgroundColor: 'pink'}]}>
                <Text style={{color: 'white'}}>
                  FB
                </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('login google')}>
              <View style={[styles.button, {backgroundColor: 'red'}]}>
                <Text style={{color: 'white'}}>
                  G
                </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('login LinkedIn')}>
              <View style={[styles.button, {backgroundColor: 'blue'}]}>
                <Text style={{color: 'white'}}>
                  LI
                </Text>
              </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.container, {alignItems: 'stretch'}]}>
          <Text onPress={() => this.props.navigator.push('emailLogin')} style={styles.EmailB}>Create Account</Text>
          <Text style={styles.loginTerms}> By Creating an Account with Connections,</Text>
          <Text style={styles.loginTerms}> I agree to
            <Text style={{color: 'red'}}> Terms of Use</Text> and
            <Text style={{color:'red'}}> Privacy Policy</Text>
          </Text>
        </View>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    EmailB: {
      padding:10,
      alignSelf: 'center',
      paddingVertical: 25,
      fontSize: 15,
    },
    loginButtonContainer: {
      flexDirection: 'column',
      height: 50,
      alignSelf: 'center',
      alignItems: 'stretch',
      justifyContent: 'center'
    },
    button: {
      height: 50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginTerms: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: 0,
      fontSize: 10,
      fontWeight: '100',
    },
  })