import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';
import Score from './Score';
import Game from './Game';
import Equation from './Equation';

class App extends Component {
  
 state = {
    numCorrect: 0,
    numQuestions: 0
 };

init=()=>{
  
  let val1 =  Math.floor(Math.random() * 100);
  let val2 =  Math.floor(Math.random() * 100);
  let val3 =  Math.floor(Math.random() * 100);
  let answer = Math.floor(Math.random() * 3) + val1 + val2 + val3;
  
  this.setState({
    	value1 : val1,
    	value2 : val2,
    	value3 : val3,
        proposedAnswer : answer 
  })
 }

  onCorrect=()=>{

	this.setState({
      numQuestions: this.state.numQuestions + 1
    });
    
    if(this.state.value1 + this.state.value2 + 
       this.state.value3=== this.state.proposedAnswer){
          this.setState({
            numCorrect: this.state.numCorrect + 1
    	  });
    }
    this.init();
  }
  
  onWrong=()=>{
    
    this.setState({
      numQuestions: this.state.numQuestions + 1
    });
    
    if(this.state.value1 + this.state.value2 + 
       this.state.value3!== this.state.proposedAnswer){
          this.setState({
            numCorrect: this.state.numCorrect + 1
    	  });
    }
    
    this.init();
    console.log('log','errado');
  }

  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Equation value1={this.state.value1} value2={this.state.value2} 
			value3={this.state.value3}  proposedAnswer={this.state.proposedAnswer}/>
			<div>
				<Game onCorrect={this.onCorrect} onWrong={this.onWrong}></Game>
				<Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}></Score>
			</div>
      	</div>
      </div>
    );
  }
}
export default App;
