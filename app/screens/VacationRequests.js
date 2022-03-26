import React from 'react';
import { FlatList } from 'react-native';

import Card from '../components/Card';
import Container from '../components/Container';
import Search from '../components/Search';

const VacationRequests = ({ vacationRequests, search, navigation }) => {
  return (
    <Container backButton navigation={navigation}>
      <Search search={search} />
      <FlatList
        data={vacationRequests}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <Card data={item} navigation={navigation} />}
        extraData={vacationRequests}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default VacationRequests;
