import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setTweets, setTweetsLoadingState, TweetsActionType } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* TweetsSaga() {
    yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
}