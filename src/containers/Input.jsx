import React, { Component } from 'react';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '../components/Input';
import { addComment } from '../reducers/comment';

class InputContainer extends Component {
    static propTypes = {
        comemnts: PropTypes.array,
        addComment: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    componentWillMount() {
        this._loadUsername();
    }
    _loadUsername() {
        let username = localStorage.getItem('username');
        if (username) {
            this.setState({ username });
        }
    }
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }

    handleSubmitComment = (comment) => {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')

        const { comments } = this.props;
        const newComments = [...comments, comment];
        localStorage.setItem('comments', JSON.stringify(newComments));
        if (this.props.addComment) {
            this.props.addComment(comment);
        }
    }
    render() {
        return (
            <Input
                onSubmit={this.handleSubmitComment}
                onUserNameInputBlur={this._saveUsername.bind(this)}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return { comments: state.comments }
}
const mapDispathcToProps = (dispatch) => {
    return {
        addComment: (comment) => {
            dispatch(addComment(comment));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispathcToProps
)(InputContainer);