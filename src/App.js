import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Ivan', age:40 },
      { name: 'Geri', age:14 },
      { name: 'Anna', age:40 },
    ],
    otherState: 'some other state'
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    //Do Not do this: this.state.persons[0].name ='MyFUllName';
    this.setState({
      persons : [
        { name: 'IvanVal', age:40 },
        { name: 'Geri', age:14 },
        { name: 'Anna', age:22 },
      ]
    })
  }

  render() { 
    return (
      <div className="App">
        <h1>H1 Tag here</h1>
        <p>Some text here like paragraph</p>
        <button onClick={this.switchNameHandler}>Swith Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
  }
}

export default App;
