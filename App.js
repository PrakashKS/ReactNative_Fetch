// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Button} from 'react-native';
// import Search from './src/components/SearchComponent'
// import {createStackNavigator} from 'react-navigation';


// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native! 123</Text>
//         {/* <HomeScreen></HomeScreen> */}
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Profile', {name: 'Jane'})}
//       />
//     );
//   }
// }

// class ProfileScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Profile',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Text style={styles.instructions}>Profile screen</Text>
//     );
//   }
// }


import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import SearchScreen from './src/components/SearchComponent'
import DashboardScreen from './src/components/DashboardComponent'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.welcome}>React Native Fetch API</Text>
        <Text>Home Screen</Text>
        <Button
          title="Go to Search Screen"
          onPress={() => this.props.navigation.navigate('Search', {name: 'Jane'})}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: {screen: HomeScreen},
  //Details: {screen: DetailsScreen},
  Search: {screen: SearchScreen},
  Dashboard: {screen: DashboardScreen},
},
  {
    initialRouteName: 'Home',
  });

  const AppContainer = createAppContainer(RootStack);

  export default class App extends React.Component {
    render() {
      return (
          
                <AppContainer />   
    
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
