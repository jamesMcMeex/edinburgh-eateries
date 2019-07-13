import React, { Component } from 'react';
import './App.css';
import dataset from '../../data/data';

import Header from '../Header';
import Brief from '../Brief';
import CheckboxFilter from '../CheckboxFilter';
import PlaceFilter from '../PlaceFilter';
import Tabs from '../Tabs';

class App extends Component {
  state = {
    eateries: {},
    eateries_filtered: {},
    cuisines: {},
    amenities: {},
    place_filter: ''
  };

  componentDidMount() {
    // Create a new, formatted object that we can work with
    const data = dataset.features;
    const eateries = data.map(eatery => {
      const data_obj = {};
      data_obj.name = eatery.properties.name || '';
      data_obj.cuisine = eatery.properties.cuisine || '';
      data_obj.amenity = eatery.properties.amenity || '';
      return data_obj;
    });

    let cuisines = {};
    Object.keys(eateries).forEach(key => {
      let cuisine = eateries[key].cuisine;
      if (cuisine !== '') {
        cuisines[cuisine] = false;
      }
    });

    let amenities = {};
    Object.keys(eateries).forEach(key => {
      let amenity = eateries[key].amenity;
      if (amenity !== '') {
        amenities[amenity] = false;
      }
    });

    this.setState({
      eateries,
      eateries_filtered: eateries,
      cuisines,
      amenities
    });
  }

  filterByText = text => {
    let {eateries, cuisines, amenities} = this.state;
    Object.keys(eateries).forEach(key => {
      let cuisine = eateries[key].cuisine;
      if (cuisine !== '') {
        cuisines[cuisine] = false;
      }
    });
    Object.keys(eateries).forEach(key => {
      let amenity = eateries[key].amenity;
      if (amenity !== '') {
        amenities[amenity] = false;
      }
    });
    // Get an array of all the eateries
    let eateries_filtered = this.state.eateries;
    // Filter the list based on the text entered
    eateries_filtered = eateries_filtered.filter(eatery => {
      return eatery.name.includes(text);
    });
    this.setState({
      eateries_filtered,
      cuisines,
      amenities,
      place_filter: text
    });
  };

  updateCuisines = (name, checked) => {
    // Get an array of all the cuisines checkboxes
    let cuisines = this.state.cuisines;
    // Set the relevant checkbox to checked
    cuisines[name] = checked;
    this.setState({
      cuisines
    });
    // Run the filtering function
    this.filterByCheckbox();
  };

  updateAmenities = (name, checked) => {
    // Get an array of all the cuisines checkboxes
    let amenities = this.state.amenities;
    // Set the relevant checkbox to checked
    amenities[name] = checked;
    this.setState({
      amenities
    });
    // Run the filtering function
    this.filterByCheckbox();
  };

  filterByCheckbox = () => {
    // Get arrays of all the checkboxes that are checked
    const cuisines = Object.keys(this.state.cuisines).filter(cuisine => {
      return this.state.cuisines[cuisine] === true;
    });
    const amenities = Object.keys(this.state.amenities).filter(amenity => {
      return this.state.amenities[amenity] === true;
    });
    // Combine the checked checkboxes
    const params = [...cuisines, ...amenities];
    // Get the whole list
    let eateries_filtered = this.state.eateries;
    // Do filtering
    eateries_filtered = eateries_filtered.filter(function(eatery) {
      // If none are selected, reset the list
      if (params.length === 0) {
        return eateries_filtered;
      }
      // If no cuisines are selected return just matching amenities
      if (cuisines.length === 0) {
        return this.indexOf(eatery.amenity) !== -1;
      }
      // If no amenities are selected return just matching cuisines
      if (amenities.length === 0) {
        return this.indexOf(eatery.cuisine) !== -1;
      }
      // If checkboxes in both controls are selected return those that match both criteria
      return (
        this.indexOf(eatery.cuisine) !== -1 &&
        this.indexOf(eatery.amenity) !== -1
      );
    }, params);

    this.setState({
      eateries_filtered,
      place_filter: ''
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Brief />
        <main className="main">
          <div className="sidebar">
            <PlaceFilter
              title={'Search for eatery'}
              onChange={this.filterByText}
              value={this.state.place_filter}
            />
            <CheckboxFilter
              title={'Type of food'}
              items={this.state.cuisines}
              onChange={this.updateCuisines}
            />
            <CheckboxFilter
              title={'Type of eatery'}
              items={this.state.amenities}
              onChange={this.updateAmenities}
            />
          </div>
          <Tabs eateries={this.state.eateries_filtered} />
        </main>
      </div>
    );
  }
}

export default App;
