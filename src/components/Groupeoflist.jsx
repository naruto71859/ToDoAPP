import React, { Component } from "react";
import List from "./list";

export default class Groupeoflist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Task: [],
      isempty:false,
     text:""
    };
  }




  handelAddtask = t => {
    if (t !== "") {
      let x = this.state.Task.length + 1;
      this.state.Task.push({ id: x , value: t });
      return this.setState({isempty:false,text:""});
      
    }
    else {this.setState({isempty:true})}
  };
      /* ou bien eon peut ecrire comme ce la    setState({ Task:  [...this.state.Task , {id:x , value:t}]  }) */



  handelDelete = x => {
    const tab = this.state.Task.filter(
      // eliminate the element clicked
      el => el.id !== x     // this el.id peut etre remplace par index of this function filter (el,index)
                                  //and x peut etre remplacer par i of the function map  en dessous
    );
    this.setState({ Task: tab });
  };

 

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <div className="container-fluid p-0 bg-info">
          <div className="container d-inline text-right">
            <div className="container-fluid">
              <h1>
                <strong>TO-DO-APP!</strong>
              </h1>
              <h4>Add-new-To-Do</h4>
              <div className="active-cyan-4 mb-4">
                <input                          ////////////////////////// input 
                  className="form-control col-6"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.text}
                  onChange={event => (this.setState({text:event.target.value}))}
                  
                
                />
              </div>
              <button                 //////////////////////////////// add button
                type="button"
                className="btn btn-outline-light btn-lg btn-add"
                onClick={() => this.handelAddtask(this.state.text)}
                ref={el =>  el}
              >
                Add New Task
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-light py-1  text-center">
          <p className="d-inline text-center">
            <h3 className="d-inline text-center">let's get some work done</h3>
          </p>
          <div className="py-3 task-parent ">
            {this.state.Task.map(el => (        ////////////////////////  mapping Task
              <List
                Task={this.state.Task}
                Key={el.id}
                Text={el.value}
                handelDelete={this.handelDelete}
              />
            ))}
            <p>
                { (this.state.isempty===true)&&  <h1 className='bg-warning'>NO TASK ADDED</h1> }
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
