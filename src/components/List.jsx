import React from 'react';
import Comment from './Comment';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDelComment = (index) => {
        this.props.onDelComment(index);
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => <Comment comment={item} index={index} key={index} onDelComment={this.handleDelComment} />)
                }
            </div>
        )
    }
}
export default List;