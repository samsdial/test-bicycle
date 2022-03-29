import { combineReducers } from 'redux';

import { PostReducers } from './PostReducers';

const reducers = combineReducers({
    PostReducers,
})

export default reducers

export type RootState = ReturnType<typeof reducers>