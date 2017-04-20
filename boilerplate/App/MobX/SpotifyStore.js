import axios from 'axios';
import { observable } from 'mobx';
import { Alert } from 'react-native';

import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()



export default class SearchStore {

  @observable tracks = [];

  getTrackList(query: string) {
    if (!query) {
      this.tracks = [];
      return;
    }
    api.search(query).
    then((response)=>{
      console.log('response',response);
      if (response.ok && response.data){
        this.tracks = response.data.tracks.items;
      } else {
        Alert.alert('Connection error', 'Couldn\'t fetch the data.');
      }

    });

  }
}
