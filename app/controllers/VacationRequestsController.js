import React, { useEffect, useState, useCallback } from 'react';

import { baseUrl } from '../config/constants';
import VacationRequests from '../screens/VacationRequests';

const VacationRequestsController = () => {
  const [vacationRequests, setVacationRequests] = useState();
  const [searchResult, setSearchResult] = useState();

  const getVacationRequests = useCallback(async () => {
    await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setVacationRequests(res))
      .catch((error) => console.log('error', error));
  }, []);

  useEffect(() => getVacationRequests(), [getVacationRequests]);

  useEffect(() => search(''), [vacationRequests]);

  const search = (searchText) => {
    let searchResult = [];
    let searchItem = searchText.toLowerCase();
    if (searchText === '') {
      searchResult = vacationRequests;
    } else {
      vacationRequests.forEach((element) => {
        let name = element.name.toLowerCase();
        let replacementName = element.replacementName.toLowerCase();

        if (name.search(searchItem) !== -1 || replacementName.search(searchItem) !== -1) {
          searchResult.push(element);
        }
      });
    }
    setSearchResult(searchResult);
  };

  return <VacationRequests vacationRequests={searchResult} search={search} />;
};

export default VacationRequestsController;
