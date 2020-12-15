import * as AT from './actionTypes';

const initialState = {
  user: {},
  isLoading: false,
  activeTweeterAccount: {},
  accounts: [],
  latestTweets: [],
  scheduledTweets: []
};

export default (state= initialState, action) => {
  switch (action.type) {
    case AT.FETCH_DETAILS:
      return {...state, isLoading: true};
    case AT.FETCH_DETAILS_SUCCESS:
      return {...state, isLoading: false};
    case AT.FETCH_USER_FAILED:
      console.error(action.payload)
      return {...state};
    case AT.FETCH_USER_SUCCESS:
      const twitterAccounts = action?.payload?.twitterAccounts;
      const activeTweeterAccount = twitterAccounts ? twitterAccounts[0] : {};
      return {...state, user: action.payload, activeTweeterAccount, accounts: twitterAccounts};
    case AT.FETCH_LATEST_TWEETS_SUCCESS:
      const latestTweets = action?.payload?.Data;
      return {...state, latestTweets};
    case AT.FETCH_SCHEDULED_TWEETS_SUCCESS:
      const scheduledTweets = action?.payload?.Data;
      return {...state, scheduledTweets, isLoading: false};
    case AT.CHANGE_ACTIVE_ACCOUNT:
      return {...state, activeTweeterAccount: action.payload};
    default:
      return {...state};
  }
};
