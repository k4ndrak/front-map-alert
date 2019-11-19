import { UPDATE_CURRENT_LOCATION } from '../actions/ActionTypes';
regioninitial = {}

const RegionReducer = (state = regioninitial, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_LOCATION:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default RegionReducer;