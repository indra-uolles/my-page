module.exports = {
  rootUrl: 'http://localhost:3000',
  compositeImage: true,
  browsers: {
      chrome: {
          desiredCapabilities: {
              browserName: 'chrome'
          }
      }
  },

  // system: {
  //   plugins: {
  //       'html-reporter': {
  //           enabled: true,
  //           defaultView: 'all',
  //           baseHost: 'http://localhost:3000'
  //       }
  //   }
//},
};