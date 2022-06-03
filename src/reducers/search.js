/* we import action types */
import { searchT } from '../action-types';

/* based on :
http://www.movable-type.co.uk/scripts/latlong.html
This function calculates distance between 2 points on earth.
 */
// const calcDistance = ([lat1, lon1], [lat2, lon2]) => {
//   /* Earth radius */
//   const R = 6371e3; // metres
//   const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
//   const φ2 = lat2 * Math.PI / 180;
//   const λ1 = lon1 * Math.PI / 180;
//   const λ2 = lon2 * Math.PI / 180;
//   const x = (λ2 - λ1) * Math.cos((φ1 + φ2) / 2);
//   const y = (φ2 - φ1);
//   const d = Math.sqrt((x * x) + (y * y)) * R;
//   return d / 1000; // km
// };
// 204,41 km calcul google
// console.log(`calcDistance ; ${calcDistance([48.85399934092498, 2.3133884261857895], [50.62976869290646, 3.0572829734650235])}`);

const initialState = {
  // dispatch information from coordinatesMiddleware :
  canLocate: false,
  origin: { // user position
    coordinates: { // type is object LatLng from leaflet
      // Commune de Tranzault centre de la France :
      lng: 1.858636,
      lat: 46.620679,
    },
    zoom: 6,
  },
  results: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // update position :
    // case searchT.SET_SEARCH_ADDRESS:
    //   return {
    //     ...state,
    //     address: action.payload,
    //   };

    case searchT.SUCCESS:
      return {
        ...state,
        origin: {
          ...state.origin,
          coordinates: action.payload,
          zoom: 13,
        },
      };

    case searchT.SET_CAN_LOCATE:
      return {
        ...state,
        canLocate: action.payload,
        zoom: 13,
      };

    case searchT.GET_PROFESSIONAL_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
