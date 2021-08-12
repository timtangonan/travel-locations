import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api-ap-northeast-1.graphcms.com/v2/cks8kyjt50fjc01xp50m3dfpv/master',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
