import { takeEvery, put, call } from 'redux-saga/effects'
import axios from "axios";


export default function* rootSaga() {
    yield takeEvery("COURSE_ACTION", HandleCourse);
}

function getCaller(url) {
    return axios.get(url)
}

function* HandleCourse() {
    let response = yield call(getCaller, "http://162.241.222.49:8894/rest-api/courses");
    console.log("Respomse "+response.data)
    yield put({ type: 'COURSE_DATA', data: response.data })
}