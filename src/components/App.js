import React from 'react';
import TimeDisplay from './TimeDisplay';
import storeGen from '../store/index';
import { Provider }  from './appContext'

class App extends React.Component {
    render() {
        return (
            <div className="demo">
                Hello React
                <input />
                <TimeDisplay />
            </div>
        );
    }
}

class Root extends React.Component {
    store = storeGen();
    render() {
        return (
            <Provider value={this.store}>
                <App />
            </Provider>
        );
    }
}

export default Root;