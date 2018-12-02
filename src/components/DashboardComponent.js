import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class DashboardComponent extends Component {
  render() {
    //  console.log('DashboardComponent - 123',this.props.userInfo);
    //  console.log('DashboardComponent - 234',this.props);

    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.navigation.state.params.userInfo.avatar_url}} style={styles.image} />
        {/* <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} /> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  }
});
