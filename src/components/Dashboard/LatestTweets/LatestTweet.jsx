import React from 'react';
import './LatestTweets.scss';

const LatestTweet = ({ tweet }) => {

  return (
      <div className="latest-tweet">
        <div className="content">
          <div className="img">
            <img src={tweet?.imageURL ?? "https://www.blexar.com/avatar.png"} />
          </div>
          <div className="tweet-text">
            {tweet?.text}
          </div>
        </div>
        <div>
          <div className="fav-count">
            fav => {tweet?.favorite_count}
          </div>
          <div className="retweet-count">
            Retweets => {tweet?.retweet_count}
          </div>
          <div className="created_at">
            {tweet?.created_at}
          </div>
        </div>
      </div>
  )
}

export default LatestTweet;
