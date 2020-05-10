import React from 'react';
import './App.css';

export default class LetterCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      value: null,
      length : 0
    };
  }
  handleChange = e => {
    this.setState({ 
      value : e.target.value,
      length : e.target.value.length
    });
  }
  render(){
    return(
      <div className="mainDiv">
        <label>
          Write a word:
          <input type='text'
          value={this.state.value}
          onChange={this.handleChange}
          />
        </label>
        <span>
          Letter Count: {this.state.length}
        </span>
      </div>
    )
  }
}


