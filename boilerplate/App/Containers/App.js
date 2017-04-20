import '../Config'
import React, { Component } from 'react'
import { Provider } from 'mobx-react';

import stores from '../MobX';

import RootContainer from './RootContainer'


/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider {...stores}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
