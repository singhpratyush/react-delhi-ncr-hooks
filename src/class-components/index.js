import React from 'react';

import { updateValue } from '../firebaseUtils';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleUpdateValueClick = this.handleUpdateValueClick.bind(this);
  }

  handleValueChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleUpdateValueClick() {
    updateValue(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <div>
        <div>
          Hi, I am the class component.
        </div>
        <div>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.handleValueChange}
          />
          <button
            onClick={this.handleUpdateValueClick}
          >
            Update!
          </button>
        </div>
      </div>
    );
  }
}
