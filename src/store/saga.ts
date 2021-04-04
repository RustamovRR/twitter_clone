import { all } from "redux-saga/effects";
import { TweetsSaga } from "./ducks/tweets/sagas";

export default function* rootSaga() {
    yield all([
        TweetsSaga()
    ])
}