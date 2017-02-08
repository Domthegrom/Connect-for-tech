import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Header, Title, InputGroup, Input,} from 'native-base';

export default class Feed extends React.Component {
    static route = {
    NavigationTab: {
      title: 'feed',
    },
  }
    render() {
        return (
            <Container>
             <Header searchBar rounded>
                    <InputGroup>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </InputGroup>
                    <Button transparent>
                        Search
                    </Button>
                </Header>
                
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail  source={require('./dom.png')} />
                            <Text>Website Developer</Text>
                            <Text note>Dominic Gozza</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover' }}  source={require('./webdevs.png')} /> 
                            <Text>
                                This is an example of the bio for the cards this is an example of the bio for the cards this is an example of the bio for the cards only 140
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="ios-create-outline" />
                                <Text>New Member</Text>
                            </Button>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail  source={require('./dom.png')} />
                            <Text>Website Developer</Text>
                            <Text note>Dominic Gozza</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover' }}  source={require('./webdevs.png')} /> 
                            <Text>
                                This is an example of the bio for the cards this is an example of the bio for the cards this is an example of the bio for the cards only 140
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="ios-create-outline" />
                                <Text>Long Term Member</Text>
                            </Button>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}

// Each card will pull a persons profile image to be the thumbnail and a summary of themselves. Accompanied by a stock image I choose for each category
// As well as stars for peoples approval the more stars the better the person. quailty wise
// The search bar should also help people when searching for a specific field you will find cards that pop up and you can swift through those.
// When the swipe the card to the right you want to talk to this person and a chat will be prompted in the matches tab.
// When you swipe right that means you dont have an interest in this person right now and will be archived for 24 hours.
// When you swipe up you are given the option to share this persons card via text/email/etc..
// When someone wants to search for a specific field they want to hire or need assistance in. 
// They will click the search button and it will show them the various different options that the app handles.
// Suggestions if you may, i.e: Website Developer, web dev, computer tech, massage therapist... etc....
// Also they can choose location radius 1 mile-100 miles, or even international.. But always based off their location.
// Cards will be pulled once searched based on location chosen and what profession the user is looking for specifically.
// onPress of the card will open up the full summary of the person and will allow the the user to either start a chat with this person or continue looking.
