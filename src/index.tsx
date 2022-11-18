import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import 'tachyons';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
// import { searchRobots, requestRobots } from './reducers';
import { robotsReducer } from './reducers/robotReducer';
import { searchReducer } from './reducers/searchReducer';
import { configureStore, combineReducers } from '@reduxjs/toolkit';


const reducer = combineReducers({
  searchRobots: searchReducer,
  requestRobots: robotsReducer
});

const store = configureStore({ reducer: reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();
