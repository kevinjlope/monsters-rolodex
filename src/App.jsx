import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => ({ monsters: users }),
        () => console.log(this.state)
      ))
  }
  onChangeSearchMonster = (event) => {
    console.log(event.target.value)
    this.setState({ searchField: event.target.value.toLocaleLowerCase() })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <input
          className='search-box'
          type="search" placeholder='Search Monsters'
          onChange={this.onChangeSearchMonster}
        />
        {/*{
          filteredMonsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }*/}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
