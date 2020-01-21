import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
    }
  }

  handleClick = (event) => {
    const operation = event.target.value;
    let counter = this.state.counter;
    switch (operation) {
      case '+':
        counter ++
        this.setState({
          counter: counter
        });
        break;
      
        case '-':
        counter > 0 && counter --
        this.setState({
          counter: counter
        });
        break;

        case 'reset':
        this.setState({
          counter: 0
        });
        break;

          default: 
          alert('please press a Button');
    }
    
  }

  render () {
    return (
      <div className="App">
        <div className='result'>{this.state.counter}</div>
        <div className='alternate'>
          <button type='button' className='add' onClick={this.handleClick} value='+'>+</button>
          <button type='button' className='min' onClick={this.handleClick} value='-'>-</button>
        </div>
        <div className='reset'>
          <button className='reset-btn' type='button' onClick={this.handleClick} value='reset'>RESET</button>
        </div>
      </div>
    );
  }
  
}

export default Counter;
