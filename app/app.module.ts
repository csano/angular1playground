import AngularApollo from 'angular1-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import gql from 'graphql-tag';
// import angular from 'angular';
import * as angular from 'angular';

angular
  // .module('myApp', ['ngRoute']);
  .module('myApp', ['ngRoute', AngularApollo])
  .config(apolloProvider => {
    apolloProvider.defaultClient(new ApolloClient({
      link: new HttpLink({ uri: '' }),
      cache: new InMemoryCache()
    }));
  });