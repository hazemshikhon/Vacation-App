import { createStore } from 'redux';
import offDays from './reducers/reducer';

const store = createStore(offDays);

export default store;
