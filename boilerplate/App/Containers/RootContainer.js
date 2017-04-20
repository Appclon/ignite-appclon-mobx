import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from '../Navigation/AppNavigation'

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { addNavigationHelpers } from 'react-navigation';

// Styles
import styles from './Styles/RootContainerStyles'

@inject('navigationStore')
@observer
class RootContainer extends Component {

  constructor(props, context) {
    super(props, context)
    this.nav = this.props.navigationStore
  }
  componentDidMount () {

  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar />
        <Navigation
          navigation={addNavigationHelpers({
            dispatch: this.nav.dispatch,
            state: this.nav.navigationState,
          })}
        />
      </View>
    )
  }
}

export default RootContainer;
