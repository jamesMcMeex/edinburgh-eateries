import React, { Component } from 'react';

class PlaceFilter extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className="controls">
        <h2 className="sidebar__title">{this.props.title}</h2>
        <input
          className="controls__text-input"
          type="text"
          placeholder="Eatery name..."
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default PlaceFilter;
