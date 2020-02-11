import React, { Component } from "react";

export default class List extends Component {

    state = {
        toggler : true
    }


  render() {
    return (
      <div>
        <div className="task row m-3">
          <button className="toggler btn btn-warning mx-2"
                onClick={ () => this.setState({toggler:false})}
                style={this.handelComplete()}
                
          >COMPLETE</button>

          <button className="togglee btn btn-outline-warning mx-2"
                onClick={ () => this.setState({toggler:true})}
                style={this.handelUndo()}
            
          >UNDO</button>
          
          <button className="delete btn btn-danger mx-3"
                    onClick={()=> this.props.handelDelete(this.props.Key)}
          >DELETE</button>
          
          <h4 className="text-task mx-2 border "
                style={this.textDecoration() }
          > {this.props.Text} </h4>
        </div>
      </div>
    );
  }

 


  handelComplete = () => {

  return  (this.state.toggler === true)? {display: " block"} : {display : "none"}

}

  handelUndo = () => {
   return  (this.state.toggler)? {display: " none"} : {display : "block"}

  }

  textDecoration = () => {
      const x= {textDecoration : "line-through"};
      const y= {textDecoration : "none"}
    return (this.state.toggler)? y :x 
  }
  
}
