import { ActionType } from '../action-types';
import { Action } from '../actions'

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = initialState, 
    action:Action
    ): RepositoriesState => {
    switch (action.type) {
        default:
            return state;

        case ActionType.SEARCH_REPO:
            return {loading: true,
                error: null,
                data: []};

        case ActionType.SEARCH_SUCCESS:
            return {loading: false,
                error: null,
                data: action.payload};

        case ActionType.SEARCH_ERROR:
            return {loading: false,
                error: action.payload,
                data: []};
    }
}

export default reducer;