import React, {useState} from 'react';

import './ScheduleTweet.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const ScheduleTweet = () => {

  const [tweet, setTweet] = useState("");
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [img, setImg] = useState("");

  return (
      <div className="schedule-tweet">
        <TextareaAutosize aria-label="Tweet" rowsMin={3} placeholder="Tweet" value={tweet} onChange={(e) => setTweet(e.target?.value)}/>
        <TextField
            label="When should this tweet go live?"
            type="datetime-local"
            value={scheduleDate}
            onChange={e => setScheduleDate(e.target?.value)}
            InputLabelProps={{
              shrink: true,
            }}
        />
        {/*<label htmlFor="upload-photo">*/}
        {/*  <input*/}
        {/*      style={{ display: "none" }}*/}
        {/*      id="upload-photo"*/}
        {/*      name="upload-photo"*/}
        {/*      type="file"*/}
        {/*      accept="image/png,image/jpg"*/}
        {/*      onChange={e => setImg(e.target?.value)}*/}
        {/*  />*/}
        {/*  <Button color="secondary" variant="contained" component="span">*/}
        {/*    Upload Image*/}
        {/*  </Button>{img}*/}
        {/*</label>*/}
        <Button variant="contained" color="primary">
          Schedule Tweet
        </Button>
      </div>
  )
};

export default ScheduleTweet;
