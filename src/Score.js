import React, {Component} from 'react'

class Score extends Component{
  render(){
    return(
      <div>
        <p className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
        </p>
	  </div>
    )
  }
}

export default Score;