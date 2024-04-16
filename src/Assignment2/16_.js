//16_.js
import React, { Component } from 'react';
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: ''
    };
  }
  handleColorChange = event => {
    this.setState({ selectedColor: event.target.value });
  }
  render() {
    return (
      <div>
        <select onChange={this.handleColorChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
        <div
          style={{
            marginTop: '10px',
            width: '100px',
            height: '100px',
            backgroundColor: this.state.selectedColor
          }}
        >Hello</div>
      </div>
    );
  }
}
export default ColorPicker;