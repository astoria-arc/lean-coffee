import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './configureStore';
import App from './App';
import history from './history';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Provider store={store}>
          <ConnectedRouter history={history}>
                <Switch>
                    <App history={history} />
                </Switch>
          </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
