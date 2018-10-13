import AngularApollo from 'angular1-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
/*`
// import angular from 'angular';
*/
import * as angular from 'angular';

angular
  // .module('myApp', ['ngRoute']);
  .module('myApp', ['ngRoute', AngularApollo])
  .config(apolloProvider => {
    const client = new ApolloClient({
        networkInterface: createNetworkInterface({
          uri: 'http://localhost:3004/graphql',
        }),
      }
    );
    apolloProvider.defaultClient(client);
    client
      .query({
        query: gql`
        query {
          standings {
            teams {
              name
            }
          }
        }
      `
      })
      .then(result => {
        console.log(result.data);
      });
  });