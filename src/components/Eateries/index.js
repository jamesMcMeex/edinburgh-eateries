import React, { Component } from 'react';
import './Eateries.css';

class Eateries extends Component {
  render() {
    return (
      <table className="eateries">
        <tbody>
          <tr className="eateries__row">
            <th className="eateries__heading">Eatery name</th>
            <th className="eateries__heading">Type of food</th>
            <th className="eateries__heading">Type of eatery</th>
          </tr>
          {Object.keys(this.props.eateries).map(eatery => {
            return (
              <tr key={eatery} className="eateries__row">
                <td className="eateries__data">
                  {this.props.eateries[eatery].name}
                </td>
                <td className="eateries__data">
                  {this.props.eateries[eatery].cuisine}
                </td>
                <td className="eateries__data">
                  {this.props.eateries[eatery].amenity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Eateries;
