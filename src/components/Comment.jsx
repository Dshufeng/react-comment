import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            create_time: ''
        };
    }
    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        );
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }
    handleDeleteComment = () => {
        let index = this.props.index;
        this.props.onDelComment(index);
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.create_time) / 1000
        this.setState({
            create_time: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
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
                <span className="comment-createdtime">{this.state.create_time}</span>
            </div>
        );
    }
}

export default Comment;