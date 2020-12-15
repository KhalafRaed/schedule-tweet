import React from 'react';
import {connect} from 'react-redux';
import {scheduledTweetsSelector} from "../selectors";

import './ScheduledTweets.scss';
import ScheduledTweet from "./ScheduledTweet";

const LatestTweets = ({ scheduledTweets }) => {

  return (
      <div className="latest-tweets">
        <div>
          Scheduled Tweets
        </div>
        {
          scheduledTweets?.map(tweet => <ScheduledTweet key={tweet?.uuid} tweet={tweet} />)
        }
      </div>
  );
};

const mapStateToProps = (state) => ({
  scheduledTweets: scheduledTweetsSelector(state)
});

export default connect(mapStateToProps, null)(LatestTweets);
