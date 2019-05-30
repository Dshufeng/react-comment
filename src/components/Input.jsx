import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username, // 从 props 上取 username 字段
            content: "",
            create_time: ""
        }
    }
    componentDidMount() {
        this.textarea.focus();
    }
    componentWillMount() {
        //this._loadUsername();
    }

    handleCommitBtn = () => {
        const { onSubmit } = this.props;
        let { username, content } = this.state;
        let create_time = +new Date();

        if (username === '' || content === '') {
            return false;
        }
        onSubmit({ username, content, create_time });

        content = "";
        this.setState({ content });
    }

    handleChangeInput = (e) => {
        let username = e.target.value;
        this.setState({ username });
    }
    handleBlurInput = (e) => {
        let username = e.target.value;
        if (username) {
            // this._saveUsername(username);
            this.props.onUserNameInputBlur(username);
        }
    }
    handleChangeText = (e) => {
        let content = e.target.value;
        this.setState({ content });
    }

    _saveUsername(username) {
        localStorage.setItem('username', username);
    }
    _loadUsername() {
        let username = localStorage.getItem('username');
        if (username) {
            this.setItem = { username };
        }
    }
    render() {
        return (
            <div>
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input
                            type="text"
                            onChange={this.handleChangeInput}
                            onBlur={this.handleBlurInput} value={this.state.username ? this.state.username : ''}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论:</span>
                    <div className="comment-field-input">
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            cols="40"
                            rows="10"
                            onChange={this.handleChangeText} value={this.state.content}
                        ></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleCommitBtn}>发布</button>
                </div>
            </div >
        )
    }
}
export default Input;