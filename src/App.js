import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankestein',
          id: 'asdf'
        },
        {
          name: 'Dracula',
          id: 'asdf1'
        },
        {
          name: 'Zombie',
          id: 'asdf2'
        }
      ]
    }
  }

  render() {
    return (
        <div className="App">
          {
            this.state.monsters.map(monster => <h1 >{monster.name}</h1>)
          }
        </div>
    )
  }

}

export default App;
