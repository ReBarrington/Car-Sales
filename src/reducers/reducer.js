// import actions from action file

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500},
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500},
      { id: 4, name: 'Rear spoiler', price: 250}
    ],
}

export const reducer = (state = initialState, action) => {
    // console.log(state, ' is state in reducer')

    switch (action.type) {
        case 'REMOVE_FEATURE':
            return {
                ...state, 
                additionalPrice: 0,
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: []
                }
            }

        case 'BUY_ITEM':
            const clickedItem = action.payload //feature
            console.log(clickedItem, " clickedItem")

            const additionalFeaturesArray = [...state.additionalFeatures];
            additionalFeaturesArray.splice(clickedItem.id-1, 1)

            return {
                ...state,
                additionalPrice: clickedItem.price,
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: [...state.car.features, clickedItem.name]
                },
                additionalFeatures: additionalFeaturesArray
            }
        default: 
            return state;
    }
}


