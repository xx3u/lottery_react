import React, {Component} from 'react';
import Number from './Number/Number';

class App extends Component {
  state = {
    numbers: [
      {value: null}
    ]
  };

  randomNumber = () => {
    const random = Math.floor(Math.random() * 36 + 1);

    this.setState({
      numbers: [
        {value: random}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.randomNumber}>New numbers</button>
        <Number value={this.state.numbers[0].value}/>
      </div>
    );
  };    
}

export default App;
