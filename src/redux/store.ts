// NEW 2

// import { configureStore } from '@reduxjs/toolkit';


// import CartReducer from './cart-reducer';

// const store = configureStore({
//   reducer: {
//     cart: CartReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;


// NEW

import { createStore, Store, applyMiddleware, Middleware } from 'redux';
import mainReducer from './reducers';

export type RootState = ReturnType<typeof mainReducer>;

const middleware: Middleware[] = []; 

const store: Store<RootState> = createStore(
  mainReducer,
  applyMiddleware(...middleware)
);

export default store;



// OLD

// import { createStore, Store, applyMiddleware, Middleware } from 'redux';
// import rootReducer from './reducers';

// export type RootState = ReturnType<typeof rootReducer>;

// const middleware: Middleware[] = []; 

// const store: Store<RootState> = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
// );

// export default store;


