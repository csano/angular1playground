import AngularApollo from 'angular1-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';
import * as angular from 'angular';

angular
  // .module('myApp', ['ngRoute']);
  .module('myApp', ['ngRoute', AngularApollo, 'services'])
  .config(apolloProvider => {
    console.log(apolloProvider);
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
              name,
              wins,
              losses,
              winningPercentage
            }
          }
        }
      `
      })
      .then(result => {
        console.log(result.data);
      });
  });