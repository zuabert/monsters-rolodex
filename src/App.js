import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
          <CardList monsters={filteredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
