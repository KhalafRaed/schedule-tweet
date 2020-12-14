import {all, takeLatest, put} from 'redux-saga/effects';
import * as AT from './actionsTypes';
import {loginSuccess, signUpAction, signUpSuccess} from "./actions";

function* login({ payload }) {
  yield put(loginSuccess(payload));
}

function* signUp({ payload }) {
  yield put(loginSuccess(payload));
}

export default function* watcher() {
  yield all([
      takeLatest(AT.LOGIN_ACTION, login),
      takeLatest(AT.SIGN_UP_ACTION, signUp)
  ]);
}
