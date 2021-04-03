import produce, { Draft } from 'immer'
import { TweetsActions, TweetsActionType } from './actionCreators'
import { LoadingState, TweetsState } from './contracts/state'

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {

    if (action.type === TweetsActionType.SET_TWEETS) {
        draft.items = action.payload
    }

}, initialTweetsState)