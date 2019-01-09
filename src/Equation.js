import React, {Component} from 'react'

class Equation extends Component{
	render(){
      return(
         <div className="equation">
            <p className="text">{`${this.props.value1} + ${this.props.value2} + ${this.props.value3} = ${this.props.proposedAnswer}`}</p>
          </div> 
      )    
	}
}
export default Equation;