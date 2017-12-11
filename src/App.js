import React, { Component } from 'react';
import uuidv4 from 'uuidv4';
import TodoList from './TodoList';

class App extends Component {a
  state = {
    text: '',
    items: []
  };

  handleInputChange = ({target: {value: text}}) => this.setState({text}); // rename event.target.value to 'text' alias

  addItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: uuidv4(),
      text: this.state.text
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    let { text, items } = this.state;

    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={this.addItem}>
          <input value={text} onChange={this.handleInputChange} />
          <button>Add</button>
        </form>
        <TodoList items={items} />
      </div>
    );
  }
}

export default App;
