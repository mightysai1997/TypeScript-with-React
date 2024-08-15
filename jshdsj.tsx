// Client-side React component interacting with a GraphQL API

import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const IntrospectionExample: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://example.com/graphql',
    cache: new InMemoryCache(),
    // Client-side cannot control server introspection settings
  });

  const fetchSchema = async () => {
    try {
      const result = await client.query({
        query: gql`
          {
            __schema {
              types {
                name
              }
            }
          }
        `,
      });
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching schema:', error);
    }
  };

  return <button onClick={fetchSchema}>Fetch Schema</button>;
};

export default IntrospectionExample;
