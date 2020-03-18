import React from 'react';

const AddedFeature = props => {
  console.log(props, ' is props for AddedFeature')
  return (
    props.feature.map(fture => {
      return (
      <li>
        <button 
          className="button"
          onClick={() => props.removeFeature(fture.id)}
        >
          X
        </button>
        {fture}
      </li>
      )
    }
  ))}

export default AddedFeature;