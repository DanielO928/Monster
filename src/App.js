import React, { Component }from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component'

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''


    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters: users}))
  }


  render() {
      const {monsters, searchField} = this.state
      const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
        <div className="App">
          <input type='text'
                 placeholder='search monsters'
                 onChange={e => this.setState({searchField: e.target.value})}/>
                 {/*setState is a asynchronous
                 never run setState in render*/}
          <CardList monsters={filteredMonsters}/>
        </ div>
    )
  }
}

export default App;
