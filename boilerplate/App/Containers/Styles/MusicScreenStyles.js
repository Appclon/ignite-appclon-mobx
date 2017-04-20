import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'


export default StyleSheet.create({
  ...ApplicationStyles.Text,
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    marginTop: 0,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  logo: {
    width: 250,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  container: {
  },
  form: {
    // backgroundColor: Colors.snow,
    // borderRadius: 4
    padding: Metrics.doublePadding
  },
  boxGoogle: {
    padding: Metrics.doublePadding,
    borderStyle: 'dashed',
    borderWidth: Metrics.borderLine,
    borderColor: Colors.primary,
    backgroundColor: '#dfe4e7',
    marginHorizontal: -1
  },
  googleButton: {
    backgroundColor: '#35A5AA'
  },
  row: {
    paddingVertical: Metrics.baseMargin
    // paddingHorizontal: Metrics.baseMargin
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    marginHorizontal: Metrics.section,
    height: Metrics.inputHeight,
    borderRadius: Metrics.baseRadius,
    borderWidth: Metrics.borderLine,
    borderColor: Colors.primary,
    backgroundColor: Colors.snow,
    padding: Metrics.baseSpace,
    color: Colors.primary
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  submitRow: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0
  },
  spinner: {
    alignSelf: 'center'
  },
  loginButtonWrapper: {
    marginHorizontal: 0
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
    padding: 6
  },
  standardButton: {
    flex: 1,
    height: Metrics.buttonHeight,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: Colors.primaryLight
  },

  emptyButton: {
    backgroundColor: 'transparent'
  },
  emptyButtonText: {
    textAlign: 'center',
    color: Colors.secondaryDark
  },
  activeButton: {
    backgroundColor: Colors.fire
  },
  activeButtonText: {
    textAlign: 'center',
    color: Colors.whiteFull
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    height: 50,
    marginTop: Metrics.doubleBaseMargin,
    alignSelf: 'center',
    resizeMode: 'contain'
  }


});
