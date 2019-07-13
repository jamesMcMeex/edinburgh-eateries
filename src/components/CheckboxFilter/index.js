import React, { Component } from 'react';

class CheckboxFilter extends Component {
  handleChange = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.props.onChange(name, checked);
  };

  render() {
    return (
      <div className="controls">
        <h2 className="sidebar__title">{this.props.title}</h2>
        {Object.keys(this.props.items).map(item => {
          return (
            <div key={item} className="controls__checkbox">
              <label>
                <input
                  name={item}
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.props.items[item]}
                />
                {item}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CheckboxFilter;
