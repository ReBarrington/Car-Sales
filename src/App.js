import React from 'react';
import { connect } from 'react-redux';
import { buyItem, removeFeature } from './actions/actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = props => {
console.log(props, " props to App")

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  //   return { type: 'REMOVE_FEATURE'} ;
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   return { type: 'BUY_ITEM', payload: "buy this item" } ;
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={props.buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: {
      price: state.car.price,
      name: state.car.name,
      image:
        state.car.image,
      features: [state.car.features]
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }
}

export default connect(
  mapStateToProps,
  { buyItem, removeFeature }
)(App);

