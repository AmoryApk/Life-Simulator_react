import React, { useState, useEffect } from "react";
import "./progress-bar.css";

let pg1 = 50;
let pg2 = 100;
let progressInterval = null;

const Range = (props) => {
  return <div className="range" style={{ width: `${props.percentRange}%` }} />;
};

const Range2 = (a) => {
  return <div className="range" style={{ width: `${a.percentRange2}%` }} />;
};

const Range3 = (b) => {
  return <div className="range" style={{ width: `${b.percentRange3}%` }} />;
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Range percentRange={props.percentRange} />
    </div>
  );
};

const ProgressBar2 = (a) => {
  return (
    <div className="progress-bar">
      <Range2 percentRange2={a.percentRange2} />
    </div>
  );
};

const ProgressBar3 = (b) => {
  return (
    <div className="progress-bar">
      <Range3 percentRange3={b.percentRange3} />
    </div>
  );
};

export const ProgressBarContainer = () => {
  let [percentRange, setProgress, progress] = useState(0);
  let [percentRange2, setProgress2, progress2] = useState(0);
  let [percentRange3, setProgress3, progress3] = useState(0);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress((prev) => prev - 0.025);
      setProgress2((prev) => prev - 0.025);
      setProgress3((prev) => prev - 0.025);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress <= 100) {
      clearInterval(progressInterval);
      setProgress();
    }
  }, [progress]);

  useEffect(() => {
    if (progress2 <= 100) {
      clearInterval(progressInterval);
      setProgress();
    }
  }, [progress2]);

  useEffect(() => {
    if (progress3 <= 100) {
      clearInterval(progressInterval);
      setProgress();
    }
  }, [progress3]);

  return (
    <div className="container">
      <ProgressBar percentRange={percentRange} />
      <ProgressBar2 percentRange2={percentRange2} />
      <ProgressBar3 percentRange3={percentRange3} />
      <div className="toggle-buttons">
        <button
          onClick={() => setProgress(percentRange > 0 ? percentRange - 20 : 0)}
        >
          Decrease
        </button>
        <button
          onClick={() =>
            setProgress2(percentRange2 > 0 ? percentRange2 - 20 : 0)
          }
        >
          Decrease 2
        </button>
        <button
          onClick={() =>
            setProgress(percentRange <= 100 ? percentRange + 20 : 100)
          }
        >
          Increase
        </button>
        <button
          onClick={() =>
            setProgress2(percentRange2 <= 100 ? percentRange2 + 20 : 100)
          }
        >
          Increase 2
        </button>

        <button
          onClick={() =>
            setProgress3(percentRange3 <= 100 ? percentRange3 + 20 : 100)
          }
        >
          Increase 3
        </button>
        <button onClick={() => setProgress(0)}>Reset</button>
      </div>
    </div>
  );
};
