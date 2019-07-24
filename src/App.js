import React, { Component } from 'react';
import { CardList } from './components/card-list/';
import { Search } from './components/search/';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      seaechField: ''
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, seaechField } = this.state;
    const monsterData = monsters.filter(monster =>
      monster.name.toLowerCase().includes(seaechField.toLowerCase())
    );
    return (
      <div className='App'>
        <Search  searchEventHandler={e => this.setState({ seaechField: e.target.value })}
        />
        <CardList monsters={monsterData} />
      </div>
    );
  }
}

export default App;
