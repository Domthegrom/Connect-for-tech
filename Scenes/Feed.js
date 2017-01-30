import React from "react";
import {StyleSheet,Text,View,Navigator,AppRegistry} from "react-native";
import {createRouter,NavigationProvider,StackNavigation} from "@exponent/ex-navigation";
import { Container, Content, Icon, Picker, Button, Header, Title, InputGroup, Input } from 'native-base';

export default class Feed extends React.Component {
static route = {
    NavigationTab: {
      title: 'feed',
    },
  }

render() {
    return(
       <Container>
                <Header searchBar rounded style={{backgroundColor: '#f2f2f2'}}>
                    <InputGroup>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </InputGroup>
                    <Button transparent>
                        Search
                    </Button>
                </Header> 
            </Container>
    );
}
}
// I need to have a DeckSwiper here, to file through potential jobs (peoples profiles)
// The search bar should also help people when searching for a specific field you will find cards that pop up and you can swift through those.
// When the swipe the card to the right you want to talk to this person and a chat will be prompted in the matches tab.
// When you swipe right that means you dont have an interest in this person right now and will be archived for 24 hours.
// When you swipe up you are given the option to share this persons card via text/email/etc..