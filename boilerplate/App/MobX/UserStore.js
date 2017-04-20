
import { AsyncStorage } from 'react-native';

import { observable, createTransformer, action } from 'mobx';

import moment from 'moment';

import { persist, create } from 'mobx-persist'


import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

console.log(DebugConfig.useFixtures);

class UserStore {

  @persist @observable session = null;
  @observable hydrated = false;
  @observable fetching = false;

  isLoggedIn() {

    return this.session;

  }


  @action hydrateComplete() {
    this.hydrated = true;

    console.log('hydrateComplete');


  }

  login(email, password) {

    console.log('email',email);
    console.log('password',password);

    this.fetching = true;
    api.login(email, password)
    .then((response) => {
      console.log('response login',response);
      if (response.ok && response.data) {
        this.fetching = false;
        console.log('session:',response.data.session);
        this.session = response.data.session;

      }else{
        this.fetching = false;
        this.session = null;
      }
    });
  }

  logout () {
    this.fetching = true;
    api.logout()
    .then((response)=>{
      this.fetching = false;
      this.session = null;
    })

  }

}

export default userStore = new UserStore();

const hydrate = create({ storage: AsyncStorage, jsonify: true });
hydrate('user', userStore).then(() => { userStore.hydrateComplete() });
