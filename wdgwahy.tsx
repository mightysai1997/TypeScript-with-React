// Client-side example to demonstrate potential query complexity

import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const DoSGraphQLExample: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://example.com/graphql',
    cache: new InMemoryCache(),
  });

  const fetchComplexData = async () => {
    try {
      const result = await client.query({
        query: gql`
          {
            user(id: "1") {
              posts {
                comments {
                  user {
                    profile {
                      address
                    }
                  }
                }
              }
            }
          }
        `, // Potentially complex nested query
      });
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return <button onClick={fetchComplexData}>Fetch Complex Data</button>;
};

export default DoSGraphQLExample;
