import React from 'react';
import './style.css';

import Input from './components/Input';
import List from './components/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentWillMount() {
    this._loadComments();
  }

  handleCommit(comment) {
    let list = [...this.state.list, comment];
    this.setState({ list: [...this.state.list, comment] });
    this._saveComments(list);
  }

  handleDelComment = (index) => {
    let list = [...this.state.list];
    list.splice(index, 1)
    this.setState({ list });
    this._saveComments(list);
  }

  _loadComments() {
    let comments = localStorage.getItem('comments');
    if (comments) {
      let list = JSON.parse(comments);
      this.setState({ list });
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  render() {
    return (
      <div className="wrapper" >
        <Input commit={this.handleCommit.bind(this)} />
        <List list={this.state.list} onDelComment={this.handleDelComment} />
      </div>
    );
  }
}

export default App;
