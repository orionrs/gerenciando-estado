import React,{Component} from 'react';

class Game extends Component {
  render(){
    	return(
        	<div className="game">
          		<button className= "buttonTrue" onClick={(e)=>this.props.onCorrect()}>true</button>
				<button className= "buttonFalse" onClick={(e)=> this.props.onWrong()}>false</button>
          	</div>
        )   
  }
}
export default Game;