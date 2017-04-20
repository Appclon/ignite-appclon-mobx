import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import MusicScreen from '../Containers/MusicScreen'

import { Colors } from '../Themes';
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      header: {
        visible: false,
      }
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  MusicScreen: {
    screen: MusicScreen,
  }
}, {
  // Default config for all screens
  headerMode:'screen',
  navigationOptions: {
    header: ({state}) => {
      return {title: state.params && state.params.title}
    },
    header: ({state}) => {
      return {
        title: state.params && state.params.title,
        tintColor: Colors.fire,
        style: styles.header
      }
    }
  }
})

export default PrimaryNav
