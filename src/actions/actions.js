
export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// action creator
export const buyItem = item => {
  // create and return action objects
  return { type: BUY_ITEM, payload: item };
};

export const removeFeature = feature => {
  return { type: REMOVE_FEATURE, payload: feature};
};
