import React from 'react';
import {
  Text,
  View,
  Image,
  ListView
 } from 'react-native'

import Spinner from '../Components/Spinner';

// import { Card, CardItem, Content, Body } from 'native-base';
import I18n from 'react-native-i18n'
import Animatable from 'react-native-animatable'

import { createIconSetFromFontello } from 'react-native-vector-icons'

// import LoginForm from '../Components/LoginForm';
import { observer, inject } from 'mobx-react/native';

import { Metrics, Colors, Images } from '../Themes'

import MusicRow from '../Components/MusicRow';
// Styles
import styles from './Styles/MusicScreenStyles'


@inject('searchStore')
@observer
class MusicScreen extends React.Component {

  constructor(props) {
    super(props);

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    *************************************************************/
    const dataObjects = [];

    // react-navigation is passing the params in state.params instead of props...
    const { params } = props.navigation.state;

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/

    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged });


    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      queryString: params.search || 'ignite'
    }
  }


  componentDidMount() {
    console.log('componentDidMount MusicScreen');

    console.log('query',this.state.queryString);
    const { searchStore } = this.props;

    searchStore.getTrackList(this.state.queryString);
  }
  componentWillReact = () => {

    const { searchStore } = this.props;
    console.log('componentWillReact MusicScreen');

    console.log('tracks',searchStore.tracks);
    if (searchStore.tracks){

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(searchStore.tracks.slice())
      });

    }

  }

  onPress = (rowData) => {
    console.log('Pressed row:',rowData);
  };


  renderRow = (rowData) => {
    console.log('rowData', rowData);
    //         <AlertRow data={rowData} onScroll={this.scrollOnRow} onPress={() => this.onPress(rowData)} />
    return (
        <MusicRow data={rowData} onPress={() => this.onPress(rowData)} />
    );
  }

  renderSeparator = (sectionId, rowId) => {
    return (
      <View key={rowId} style={styles.separator} />
    );
  }

  render() {

    const { searchStore } = this.props;
    console.log(searchStore.tracks);

    return (
      <View style={styles.mainContainer}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enderSeparator={this.renderSeparator}
          enableEmptySections
          pageSize={15}
        />
      </View>
    );
  }
}

export default MusicScreen;
