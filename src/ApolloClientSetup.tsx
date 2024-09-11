// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cm0a3ffvl06ax07w4kxcqoz26/master',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
