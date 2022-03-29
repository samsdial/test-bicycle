//import Post from "../../models/postModels";
import ActionType from "./action-types";


interface FetchPostRequest {
    type: ActionType.FETCH_POST_REQUEST,

} 
interface FetchPostSuccess {
    type: ActionType.FETCH_POST_SUCCESS
    payload: any
}

interface FetchPostFailed {
    type: ActionType.FETCH_POST_FAILED
    payload: string
}

interface SearchPosts {
    type: ActionType.SEARCH_POSTS
    payload: any
}


export type Action = FetchPostRequest | FetchPostSuccess | FetchPostFailed | SearchPosts