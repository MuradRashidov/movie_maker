import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import {BrowserRouter} from "react-router-dom"
import React from 'react';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
