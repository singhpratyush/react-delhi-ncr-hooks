import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    this.setState({
      inputValue: event.target.value,
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
          <button>Update!</button>
        </div>
      </div>
    );
  }
}
