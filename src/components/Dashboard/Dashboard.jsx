import React from 'react';

import './Dashboard.scss';
import ScheduleTweet from "./ScheduleTweet";

const Dashboard = () => {
  return (
      <div className="dashboard-container">

        <div className="tweeter-account">
        </div>

        <div className="tweeter-body">

          <div className="schedule-tweet">
            <ScheduleTweet />
          </div>

          <div className="tweets-container">
            <div className="scheduled-tweets">
            </div>
            <div className="latest-tweets">
            </div>
          </div>

        </div>

      </div>
  );
};

export default Dashboard;
