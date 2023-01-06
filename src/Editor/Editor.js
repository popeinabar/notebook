  

  import React, { Component } from 'react'
  
  export default class Editor extends Component {
    constructor(props) {
        super(props);
        // to bind the method with the event handler without (). 
        // this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    reset(){
       this.setState({
        value:" ",
       }) 
    }
    render() {
      return (
        <div className="container">
        <div className="input">
            <h3>Input</h3>
            {/* <!-- call the handleChanges method in the onChange event and set the default value as empty--> */}
            <textarea className="input-text" onChange={(changedText)=>this.handleChange(changedText)} Value={this.state.value}/>
            <button onClick={this.reset()}> dont click </button>
        </div>
        <div className="output">
            <h3>Pro Note</h3>
            <div className="output-text">{this.state.value}</div>
        </div>                
    </div>
      )
    }
  }
  
  