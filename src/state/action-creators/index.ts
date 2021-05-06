import axios from 'axios';
import { Dispatch } from 'redux';
import {ActionType} from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPO
        });

        try {
            const params = {params: {text: term}};
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search',params);

            const names = data.objects.map((result:any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_SUCCESS,
                payload: names
            })

        }
        catch (err) {
            dispatch({
                type: ActionType.SEARCH_ERROR,
                payload: err.message
            })
        }

    }
};

