import axios from 'axios';
import { Dispatch } from 'redux'

import { Action } from '..'
//import Post from '../../../models/postModels';
import ActionType from '../action-types';


// FETCH POST
export const fetchPosts = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.FETCH_POST_REQUEST });

	try {
		const data = await axios.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=50&location=IP&distance=10&stolenness=stolen');
		dispatch({ type: ActionType.FETCH_POST_SUCCESS, payload: data });
	} catch (error: any) {
		dispatch({ type: ActionType.FETCH_POST_FAILED, payload: error.message });
		console.log(error.message);
	}
};


export const searchPosts = (query: any) => (dispatch: Dispatch, getState: any) => {

	const { PostReducers } = getState();
	const Prob = PostReducers.searchResults?.bikes || []
	
	const searchResults =  Prob.filter((post: any) => 
		post.title.toLowerCase().includes(query.toLowerCase())
	);
	const arrayBikes = { bikes: [...searchResults]}
	dispatch({ type: ActionType.SEARCH_POSTS, payload: arrayBikes });
};
