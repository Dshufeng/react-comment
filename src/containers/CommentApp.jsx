import React, { Component } from 'react';
import Input from './Input';
import List from './List';
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Input />
                <List />
            </div>
        );
    }
}

export default App;