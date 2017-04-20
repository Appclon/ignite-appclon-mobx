import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Colors, Images } from '../Themes'

import { observer, inject } from 'mobx-react/native';

import RoundedButton from '../Components/RoundedButton';
import Spinner from '../Components/Spinner';



// Styles
import styles from './Styles/LaunchScreenStyles'

@inject('userStore')
@observer
export default class LaunchScreen extends React.Component {

  constructor(props){
    super(props);
    this.user = props.userStore;

    this.search = 'ignite'
  }

  loginLogout = () => {

    const { userStore } = this.props;
    if (userStore.isLoggedIn()){

      if (userStore.fetching) {
        return (
          <Spinner style={styles.spinner} color={Colors.fire} />
        );
      }

      return (
        <RoundedButton
          text="Logout"
          onPress={this.logout}
        />
      );

    }
    return (
      <RoundedButton
        text="Login"
        onPress={this.openLogin}
      />
    )
  };
  logout = () => {
    this.user.logout();
  };
  openLogin = () => {
    const {navigate, setParams, state} = this.props.navigation
    navigate("LoginScreen", {title: "LoginScreen", parentKey: state.key})
  }
  openMusic = () => {
    const {navigate, setParams, state} = this.props.navigation;
    navigate("MusicScreen", { search: this.search, title: `Results for: ${this.search}`, parentKey: state.key })
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.appclon} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Base Boilerplate integrating Ignite with MobX and React Navigation.
            </Text>
          </View>
          { this.loginLogout() }

          <RoundedButton
            text={`Search "${this.search}" on Spotify`}
            onPress={this.openMusic}
          />

        </ScrollView>
      </View>
    )
  }
}
