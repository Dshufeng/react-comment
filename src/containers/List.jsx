import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initComments, deleteComment } from '../reducers/comment'
import List from '../components/List';

class ListContiner extends React.Component {
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        deleteComments: PropTypes.func
    }

    componentWillMount() {
        this._loadComments();
    }

    _loadComments() {
        let comments = localStorage.getItem('comments');
        comments = comments ? JSON.parse(comments) : [];
        this.props.initComments(comments);
    }

    handleDelComment = (index) => {
        let comments = [...this.props.comments];
        comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(comments));
        if (this.props.deleteComment) {
            this.props.deleteComment(index);
        }
    }
    render() {
        return (
            <List
                list={this.props.comments}
                onDelComment={this.handleDelComment}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: (comments) => {
            dispatch(initComments(comments));
        },
        deleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContiner);