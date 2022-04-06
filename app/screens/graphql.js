import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import Container from '../components/Container';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const GraphQl = () => {
  const try1 = gql`
    query Chapters {
      country(code: "BR") {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  `;

  const { data } = useQuery(try1);
  console.log('data', data);
  return (
    <Container>
      <FlatList
        style={{ width: '100%' }}
        data={data.rates}
        renderItem={({ item }) => (
          <>
            <Text style={{ color: 'black' }}>{item.currency}</Text>
          </>
        )}
      />
    </Container>
  );
};

export default GraphQl;
