import React, { Component } from 'react';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '../components/Input';
import { addComment } from '../reducers/comment';
import axios from 'axios';
import qs from 'qs';

const baseUrl = 'http://localhost:9090/';

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
        axios.post(baseUrl, qs.stringify({
            list: 123
        }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                console.log(response);
            });
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

// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
// mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象
const mapStateToProps = (state) => {
    state = state.commentReducer;
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