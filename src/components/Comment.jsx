import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleDeleteComment = () => {
        let index = this.props.index;
        this.props.onDelComment(index);
    }
    render() {
        const { comment } = this.props;
        return (
            <div className="comment">
                <div className="user-name">
                    <span>{comment.username}: </span>
                </div>
                <p>{comment.content}</p>
                <span className="comment-delete" onClick={this.handleDeleteComment}>删除</span>
            </div>
        );
    }
}

export default Comment;