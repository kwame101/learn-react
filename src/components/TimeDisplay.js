import React from 'react';
import { Consumer } from './appContext'

class TimeDisplay extends React.Component {
    state = this.props.store.state;

    // lifecyle component 
    componentDidMount() {
        this.props.store.on('change', (newState) =>{
            this.setState(newState);
        });
    }

    render() {
        return (
            <Consumer>
                {(store) => {
                    return (
                        <p>{this.state.time.toString()}</p>
                    );
                }}
            </Consumer>
        )
    }
}

class TimeDisplayConnected extends React.Component {
    render () {
        return (
            <Consumer>
            {store => {
                return <TimeDisplay store={store} />;
            }}
            </Consumer>
        )
    }
}

export default TimeDisplayConnected;