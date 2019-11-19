import { combineReducers } from 'redux';
import AlertReducer from './AlertReducer';
import RegionReducer from './RegionReducer';

export default combineReducers({
    alerts: AlertReducer,
    region: RegionReducer
})