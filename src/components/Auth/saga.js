import {all, call, takeLatest, put} from 'redux-saga/effects';
import * as AT from './actionsTypes';
import {loginSuccess} from "./actions";
import {doPost} from "../../http/methods";
import {loginEndpoint} from "./endpoints";
import {BASE_URL} from "../Dashboard/endpoints";
import {TOKEN_LS_KEY} from "./constants";

function* login({ payload }) {

  const response = yield call(doPost, {url: loginEndpoint, payload:
        {email: payload?.email, password: payload?.password}, baseUrl: BASE_URL});

  yield put(loginSuccess(response?.data?.access_token));

  localStorage.setItem(TOKEN_LS_KEY, "TEST");
  payload?.history?.push("/dashboard");
  // if (response?.data?.access_token) {
  // }
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
