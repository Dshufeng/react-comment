import React, { Component } from 'react';

import Input from './Input';
import List from './List';

class Comment extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <Input />
                    <List />
                </div>
            </div>
        );
    }
}

export default Comment;