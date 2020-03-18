import React from 'react';

const AddedFeature = props => {

  console.log(props, ' is props for AddedFeature')

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={() => props.removeFeature(props.feature.id)}
      >
        X
      </button>
      {props.feature.map(fture => 
        <ul className="addedfeatures-list">
          <li>{fture}</li>
        </ul>
      )}
    </li>
  );
};

export default AddedFeature;
