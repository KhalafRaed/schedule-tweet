import React from 'react';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import './ScheduledTweets.scss';
import Fab from "@material-ui/core/Fab";
import {deleteScheduledTweet} from "../actions";

const ScheduledTweet = ({ tweet, deleteScheduledTweet }) => {

  const handleDeleteTweet = () => {
    deleteScheduledTweet(tweet);
  };

  return (
      <div className="latest-tweet">
        <div className="content">
          <div className="header">
            <div className="owner">
              <div className="owner-img">
                <img src={tweet?.twitterProfilePictureHttps ?? "https://www.blexar.com/avatar.png"} />
              </div>
              {tweet?.twitterFullName}
            </div>
            <div className="created_at">
              {tweet?.tweetTime}
            </div>
          </div>
          <div className="img">
            <img src={tweet?.tweetImageLink ?? "https://www.blexar.com/avatar.png"} />
          </div>
          <div className="tweet-text">
            {tweet?.tweetText}
          </div>
          <div className="delete">
            <Fab color="primary" aria-label="add" onClick={() => handleDeleteTweet()}>
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      </div>
  )
}

export default connect(null, { deleteScheduledTweet })(ScheduledTweet);
