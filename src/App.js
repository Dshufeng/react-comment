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

  handleCommit(comment) {
    console.log(comment);
    this.setState({ list: [...this.state.list, comment] });
    console.log(this.state.list);
  }
  render() {
    return (
      <div className="wrapper" >
        <Input commit={this.handleCommit.bind(this)} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
