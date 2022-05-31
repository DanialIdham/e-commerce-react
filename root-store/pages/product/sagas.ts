import {call, put, takeLatest} from 'redux-saga/effects';
import * as TYPES from './types';
import api from './apis';


export function* getAllCategory(){
    const { response, error } = yield call(api.getAllCategory);
    if (response)
    {
        yield put({type:TYPES.GET_ALL_CATEGORY, payload: response.data});
    }
    else{
        console.log(error)
    }
}

export function* ProductSagas(){
    yield takeLatest(TYPES.GET_ALL_CATEGORY, getAllCategory);
}
