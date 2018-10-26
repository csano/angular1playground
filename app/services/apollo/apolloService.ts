import * as angular from 'angular';
import ApolloClient, { createNetworkInterface, ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';

export class ApolloService {

  private client: ApolloClient;

  constructor($http) {
    this.client = new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'http://localhost:3004/graphql',
      }),
    });
  }

  public query(query: any): Promise<ApolloQueryResult<{}>> {
    return this.client.query({ query: query });
  }

}

angular
  .module('services')
  .service('ApolloService', ['$http', ApolloService]);
