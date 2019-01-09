import React, {Component} from 'react'
import Score from './Score';

let numCorrect=0;
let numQuestions =0;

class Quiz extends Component{
  
  state={value:0};

 answer(){
 }

  handleClick([x,y,z], answer, correta) {
 
     	if(x+y+x ===answer){
  			if(correta===true){
  	   			numCorrect++;
			}
        }else{
          if (correta===false){
	  			numCorrect++
          }
       }	
   
    numQuestions++;
    
    this.setState({
      value: this.state.value + 1
    });
    //console.log('log',score + 'de' + quiz);
  }

  render(){
    return(
       <div className="quiz">
      	  <button className='buttonTrue'
      		onClick={(e)=>this.handleClick(this.props.values, this.props.answer, true)}>True</button>
          <button className='buttonFalse'
			onClick={(e)=>this.handleClick(this.props.values, this.props.answer, false)}>False</button>
		  <Score numCorrect={numCorrect} numQuestions={numQuestions}></Score>
       </div>
    )
  }
}
export default Quiz

