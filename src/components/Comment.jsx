import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { comment } = this.props;
        return (
            <div className="comment">
                <div className="user-name">
                    <span>{comment.username}: </span>
                </div>
                <p>{comment.content}</p>
            </div>
        );
    }
}

export default Comment;