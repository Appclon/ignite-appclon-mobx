import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Keyboard
 } from 'react-native'

import Spinner from '../Components/Spinner';


// import { Card, CardItem, Content, Body } from 'native-base';
import I18n from 'react-native-i18n'
import Animatable from 'react-native-animatable'

import { createIconSetFromFontello } from 'react-native-vector-icons'

import RoundedButton from '../Components/RoundedButton';

// import LoginForm from '../Components/LoginForm';
import { observer, inject } from 'mobx-react/native';

import { Metrics, Colors, Images } from '../Themes'

// Styles
import styles from './Styles/LoginScreenStyles'


@inject('userStore')
@observer
class LoginScreen extends React.Component {

  constructor(props) {



    super(props);

    this.state = {

      email: 'reactnative@infinite.red',
      password: 'password'


    };
  }

  componentWillReact = () => {


    console.log('componentWillReact LoginScreen');
    const { navigation, userStore } = this.props;

    console.log('logged in:',userStore.session);
    if (userStore.isLoggedIn()){

      navigation.goBack();

    }
  }

  handleSubmit = () => {

    const { userStore } = this.props;

    const { email, password } = this.state;

    userStore.login(email, password);


  };

  errorMessage = () => {
    const { error } = this.props;
    if (error) {
      return (
        <Text style={[styles.errorMessage, styles.center]}>
          {error}
        </Text>
      );
    }
  };

  loginButton = () => {

    const { userStore } = this.props;

    if (userStore.fetching) {
      return (
        <Spinner style={styles.spinner} color={Colors.fire} />
      );
    }

    return (
      <RoundedButton
        onPress={() => { this.handleSubmit() }}
        text={I18n.t('signIn')}
      />
    );
  };






  renderEmailField = () => {

    const { userStore } = this.props;
    const { email } = this.state;


    return (
      <TextInput
        ref="email"
        style={styles.textInput}
        value={email}
        editable={!userStore.fetching}
        keyboardType="default"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={ email => this.setState({ email }) }
        underlineColorAndroid="transparent"
        onSubmitEditing={() => this.refs.password.focus()}
        placeholder={I18n.t('email')}
      />
    );
  }

  renderPasswordField = () => {

    const { userStore } = this.props;
    const { password } = this.state


    return (
      <TextInput
        ref='password'
        style={styles.textInput}
        value={password}
        editable={!userStore.fetching}
        keyboardType='default'
        returnKeyType={'go'}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
        onChangeText={password => this.setState({ password })}
        underlineColorAndroid='transparent'
        onSubmitEditing={()=>{this.handleSubmit()}}
        placeholder={I18n.t('password')} />
    )
  }

  createForm = () => {


    return (
      <View>
        <View style={styles.form}>
          <View style={styles.row}>
            {this.renderEmailField()}
          </View>

          <View style={styles.row}>
            {this.renderPasswordField()}
          </View>

          {this.errorMessage()}
          {this.loginButton()}
        </View>

      </View>
    );

  };

  render() {

    const { userStore } = this.props;
    console.log(userStore.session);

    return (
      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="always"
        >
          <KeyboardAvoidingView behavior="position">
            <Image
              source={Images.logo}
              style={styles.logo}
            />

            {this.createForm()}

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}



export default LoginScreen;
