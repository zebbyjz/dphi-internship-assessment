import React, { useState, useEffect } from "react";

function Timer(props) {
  let { starting, ending } = props;
  const displays = {
    DisplayDays: "",
    DisplayHours: "",
    DisplayMinutes: "",
    DisplaySeconds: "",
    DisplayStatus: "",
  };
  const [display, setDisplay] = useState(displays);
  starting = new Date(starting);
  ending = new Date(ending);

  let delta;

  useEffect(() => {
    let DisplayStatus = "";
    const interval = setInterval(function mInterval(){
      let currDate = new Date(Date.now());

      if (currDate > starting && currDate < ending) {
        //Active
        DisplayStatus = "Ends in";
        delta = ending - currDate;
      } else if (currDate < starting) {
        //Upcoming
        DisplayStatus = "Starts in";
        delta = starting - currDate;
      } else {
        //Finished
        DisplayStatus = "Ended";
        delta = 0;
      }

      let seconds = delta / 1000;

      let DisplayDays = Math.floor(seconds / (3600 * 24));
      let DisplayHours = Math.floor((seconds / 3600) % 24);
      let DisplayMinutes = Math.floor((seconds / 60) % 60);
      let DisplaySeconds = Math.floor(seconds % 60);

      DisplayDays = ("0" + DisplayDays).slice(-2);
      DisplayHours = ("0" + DisplayHours).slice(-2);
      DisplayMinutes = ("0" + DisplayMinutes).slice(-2);
      DisplaySeconds = ("0" + DisplaySeconds).slice(-2);

      let obj = {
        DisplayDays,
        DisplayHours,
        DisplayMinutes,
        DisplaySeconds,
        DisplayStatus,
      };
      setDisplay(obj);
      return mInterval;
    }(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      <p className="mt-4 mb-0 fw-light">{display.DisplayStatus}</p>
      <div className="d-flex">
        <div className="p-2">
          <p className="fw-bolder">{display.DisplayDays}</p>
          <p className="fw-bolder">Days</p>
        </div>
        <div className="p-2">
          <p className="fw-bolder">{display.DisplayHours}</p>
          <p className="fw-bolder">Hours</p>
        </div>
        <div className="p-2">
          <p className="fw-bolder">{display.DisplayMinutes}</p>
          <p className="fw-bolder">Minutes</p>
        </div>
        <div className="p-2">
          <p className="fw-bolder">{display.DisplaySeconds}</p>
          <p className="fw-bolder">Seconds</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Timer;
