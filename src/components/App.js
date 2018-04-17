import React from 'react';
import TimeDisplay from './TimeDisplay';

import store from '../store/index';

class App extends React.Component {
    state = store.state;

    // lifecyle component 
    componentDidMount() {
        store.on('change', () =>{
            this.setState(store.state);
        });
    }

    render() {
        return (
            <div className="demo">
                Hello React
                <input />
                <TimeDisplay  time={this.state.time} />
            </div>
        );
    }
}

export default App;