(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*`
import AngularApollo from 'angular1-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import gql from 'graphql-tag';
// import angular from 'angular';
import * as angular from 'angular';
*/

angular
  .module('myApp', ['ngRoute']);
  /*
  .module('myApp', ['ngRoute', AngularApollo])
  .config(apolloProvider => {
    apolloProvider.defaultClient(new ApolloClient({
      link: new HttpLink({ uri: '' }),
      cache: new InMemoryCache()
    }));
  });
  */
},{}],2:[function(require,module,exports){
angular
  .module('myApp')
  .component('helloWorld', {
    templateUrl: './components/hello-world/hello-world.html',
    bindings: {
      name: '<'
    }
  });

},{}],3:[function(require,module,exports){
angular
  .module('myApp')
  .component('mlbStandings', {
    templateUrl: './components/mlb-standings/mlb-standings.html',
    controller: MlbStandingsController
  });

},{}]},{},[1,2,3]);
