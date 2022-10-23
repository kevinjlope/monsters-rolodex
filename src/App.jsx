import './App.css'
import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
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
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='search-box'
          placeholder='Search Monsters'
          onChangeHandler={this.onChangeSearchMonster}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
