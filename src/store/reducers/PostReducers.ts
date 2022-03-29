import ActionType from "../actions/action-types";
import { RootObject } from "../../models/postModels"

interface TypePostReducers {
	loading: boolean;
	error: string | null;
	posts: RootObject | undefined;
	searchResults: RootObject | undefined;
	page: number;
}

const initialState = {
	loading: false,
    error: null,
	posts: undefined,
	searchResults: undefined,
	page: 1,
};

export const PostReducers = (state: TypePostReducers = initialState, action: any): TypePostReducers => {
	switch (action.type) {
		case ActionType.FETCH_POST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ActionType.FETCH_POST_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload.data,
				searchResults: action.payload.data,
			};
		case ActionType.FETCH_POST_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ActionType.SEARCH_POSTS:
			console.log('Action type', action.payload);
			return {
				...state,
				posts:  action.payload,
				page: 1
			};
		default:
			return state;
	}
};
