import { Action } from "redux";
import { Tweet, TweetsState } from "./contracts/state";


export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS'
}

export interface setTweetsActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.SET_TWEETS;
    payload: TweetsState['items']
}

export const setTweets = (payload: TweetsState['items']): setTweetsActionInterface => ({
    type: TweetsActionType.SET_TWEETS,
    payload
})

export type TweetsActions = setTweetsActionInterface