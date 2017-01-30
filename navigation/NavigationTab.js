import Exponent from 'exponent';
import React from 'react';
import { Ionicons } from '@exponent/vector-icons';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, TouchableHighlight,} from 'react-native';
import { TabNavigation,TabNavigationItem,StackNavigation} from '@exponent/ex-navigation';
import { Container, Header, InputGroup, Input, Icon, Button } from 'native-base';
import Router from "./Router";


export default class NavigationTab extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation
          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="first">
          <TabNavigationItem
            id="first"
            title="Feed"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-list-box-outline" size={30} color='blue' />}>
            <StackNavigation initialRoute={Router.getRoute('feed')}/>
          </TabNavigationItem>

          <TabNavigationItem
            id="second"
            title="Matches"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-people-outline" size={30} color='blue' />}>
            <StackNavigation initialRoute={Router.getRoute('matches')}/>
          </TabNavigationItem>

          <TabNavigationItem
            id="third"
            title="Post"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-add-circle-outline" size={30} color='blue' />}>
          <StackNavigation initialRoute={Router.getRoute('post')} />
          </TabNavigationItem>

          <TabNavigationItem
            id="fourth"
            title="Profile"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-person-outline" size={30} color='blue' />}>
            <StackNavigation initialRoute={Router.getRoute('profile')} />
          </TabNavigationItem>

        </TabNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  cover: {
    flex: 1,
    height: 160,
    width: null,
    resizeMode: 'cover',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#0084FF',
    borderRadius: 3,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 13,
    color: '#fff',
  },
  heading: {
    margin: 4,
    color: '#222',
    fontWeight: 'bold',
    fontSize: 32,
  },
  body: {
    margin: 4,
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
  },
  selectedTab: {
    backgroundColor: '#0084FF',
  },
});