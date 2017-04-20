export default {
  // Functions return fixtures
  login: (email, password, simulateWrong = false) => {
    return new Promise(function(resolve, reject) {
      if (!simulateWrong) {

        const data = require('../Fixtures/login.json');
        setTimeout(()=>{
          resolve({
          ok: true,
          data: data
          })
        }, 1000);



      } else {
        reject({
          ok: false,
          error: 'User not valid'
        });  // error, rejected
      }
    });
  },
  logout: () => {
    return new Promise(function(resolve, reject) {
        setTimeout(()=>{
          resolve({
          ok: true,
          data: []
          })
        }, 1000);
    });
  },
  search: (query) => {
    return new Promise(function(resolve, reject) {

      const data = require('../Fixtures/spotify.json');
      setTimeout(()=>{
        resolve({
        ok: true,
        data: data
        })
      }, 0);

    });
  }
};
