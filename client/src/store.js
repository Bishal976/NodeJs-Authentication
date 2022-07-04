import { configureStore } from '@reduxjs/toolkit';
import reducers from './redux/reducer/index';
const store = configureStore({
    reducer: { reducers },
  });
  
//   export default store;
// const store=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;