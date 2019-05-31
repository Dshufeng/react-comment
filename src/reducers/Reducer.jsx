import { combineReducers } from 'redux'
import { offerReducer } from './offer'
import { commentReducer } from './comment'

export default combineReducers({
    offerReducer,
    commentReducer
});