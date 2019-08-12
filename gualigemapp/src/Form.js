
import React, {Component} from 'react';
import { guali } from './gualigem';
export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
        
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
            </form>
            <h1>{guali(this.state.value)}</h1>
            </div>
          );
    }
}