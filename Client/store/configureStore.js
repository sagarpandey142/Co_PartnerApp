// store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';

const rootReducers = {
  form: rootReducer,
};

const store = configureStore({
  reducer: rootReducers,
  // Add any additional configuration options here
});

export default store;
