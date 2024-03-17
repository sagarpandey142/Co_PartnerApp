// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
import Signup from './Component/SignupComponent/Signup';

export default function App() {
  return (
    <Provider store={store}>
      <Signup />
    </Provider>
  );
}
