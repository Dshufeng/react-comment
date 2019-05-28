import React from 'react';
import Comment from './Comment';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => <Comment comment={item} key={index} />)
                }
            </div>
        )
    }
}
export default List;