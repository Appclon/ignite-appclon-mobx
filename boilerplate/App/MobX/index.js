import SpotifyStore from './SpotifyStore';
import navigationStore from './NavigationStore';
import userStore from './UserStore';

export default {
  searchStore: new SpotifyStore(),
  navigationStore,
  userStore
  // place for other stores...
};
