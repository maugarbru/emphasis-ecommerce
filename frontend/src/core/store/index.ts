import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middleware = [
  thunk,
  ...(process.env.NODE_ENV === 'development' ? [logger] : []),
];

const store = configureStore({
  reducer: {},
  middleware,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
