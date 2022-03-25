import React from 'react';
import { FlatList } from 'react-native';

import Card from '../components/Card';
import Container from '../components/Container';
import Search from '../components/Search';

const VacationRequests = ({ vacationRequests, search }) => {
  return (
    <Container backButton>
      <Search search={search} />
      <FlatList
        data={vacationRequests}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <Card data={item} />}
        extraData={vacationRequests}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default VacationRequests;
