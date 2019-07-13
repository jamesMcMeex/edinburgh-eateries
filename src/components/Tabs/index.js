import React, { Component } from 'react';
import './Tabs.css';

import Eateries from '../Eateries';

class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <ul className="tabs__list">
          <li><button className="tabs__tab" title="Map coming soon..." disabled>Map</button></li>
          <li><button className="tabs__tab active">List</button></li>
        </ul>
        <div className="tab__content">
          <Eateries eateries={this.props.eateries}/>
        </div>
      </div>
    );
  }
}

export default Tabs;
