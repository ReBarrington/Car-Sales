import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState, ' is store.getState in createStore')


  const rootElement = document.getElementById('root');
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootElement
        );

const mapStateToProps = state => {
    return {
        
    }
    }