import { ActionType } from '../action-types';


interface SearchReposAction {
    type: ActionType.SEARCH_REPO;
}

interface SearchReposErrorAction {
    type: ActionType.SEARCH_ERROR;
    payload: string;
}

interface SearchReposSuccessAction {
    type: ActionType.SEARCH_SUCCESS;
    payload: string[];
}

export type Action = 
    | SearchReposAction 
    | SearchReposErrorAction 
    | SearchReposSuccessAction;
