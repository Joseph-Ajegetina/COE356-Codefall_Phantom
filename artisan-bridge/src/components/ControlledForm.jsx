import React, { Component } from 'react'

class ControlledForm extends Component {
    constructor() {
      super();
      this.state = {
        title: "",
        description: "",
        submitActive: false
      };
    }
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      },this.checkFields);
    };
    handleSubmit = event => {
      event.preventDefault();
    
      if (!this.state.submitActive) {
        return
      }
      const submission = {
        title: this.state.title,
        description: this.state.description
      };
      this.props.submit(submission);
      this.setState({
        title: '',
        description: '',
        submitActive: 'false'
      })
    };
    checkFields = () => {
      if (this.state.title && this.state.description) {
        this.setState({submitActive: true});
      } else {
        this.setState({submitActive: false});
      }
    };
    render() {
      return (
        <form 
          className="controlled-form"
          onSubmit={event => this.handleSubmit(event)}
        >
          <input 
            className="text-input title-input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={event => {
              this.handleChange(event);  
            }}
          />
          <input 
            className="text-input description-input"
            type="text"
            name="description"
            value={this.state.description}
            onChange={event => {
              this.handleChange(event);  
            }}
          />
          <button 
            className={`submit-btn ${this.state.submitActive}`}
          >submit</button>
        </form>
      );
    }
  }
  export default ControlledForm;
