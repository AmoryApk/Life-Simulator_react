import React, { useState, useEffect } from "react";
import "./progress-bar.css";

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

const Range4 = (c) => {
  return <div className="range" style={{ width: `${c.percentRange4}%` }} />;
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

const ProgressBar4 = (c) => {
  return (
    <div className="progress-bar">
      <Range4 percentRange4={c.percentRange4} />
    </div>
  );
};

export const ProgressBarContainer = () => {
  let [percentRange, setProgress, progress] = useState(0);
  let [percentRange2, setProgress2, progress2] = useState(0);
  let [percentRange3, setProgress3, progress3] = useState(0);
  let [percentRange4, setProgress4, progress4] = useState(0);
  const [buttonStatus, setButtonStatus] = React.useState(false);
  const [buttonStatus2, setButtonStatus2] = React.useState(false);
  const [buttonStatus3, setButtonStatus3] = React.useState(false);
  const [buttonStatus4, setButtonStatus4] = React.useState(false);

  const Kampus = () => {
    if (buttonStatus === true || buttonStatus === false) {
      setButtonStatus(true);
    }
    if (buttonStatus2 === true || buttonStatus2 === false) {
      setButtonStatus2(true);
    }
    if (buttonStatus3 === true || buttonStatus3 === false) {
      setButtonStatus3(true);
    }
    if (buttonStatus4 === true || buttonStatus4 === false) {
      setButtonStatus4(false);
    }
  };

  const cafe = () => {
    if (buttonStatus === true || buttonStatus === false) {
      setButtonStatus(false);
    }
    if (buttonStatus2 === true || buttonStatus2 === false) {
      setButtonStatus2(true);
    }
    if (buttonStatus3 === true || buttonStatus2 === false) {
      setButtonStatus3(true);
    }
  };

  const rumah = () => {
    if (buttonStatus === true || buttonStatus === false) {
      setButtonStatus(false);
    }
    if (buttonStatus2 === true || buttonStatus2 === false) {
      setButtonStatus2(false);
    }
    if (buttonStatus3 === true || buttonStatus2 === false) {
      setButtonStatus3(false);
    }
    if (buttonStatus4 === true || buttonStatus4 === false) {
      setButtonStatus3(false);
    }
  };

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress((prev) => prev - 0.025);
      setProgress((prev) => prev + 0.005);
      setProgress2((prev) => prev - 0.025);
      setProgress2((prev) => prev + 0.005);
      setProgress3((prev) => prev - 0.025);
      setProgress3((prev) => prev + 0.005);
      setProgress4((prev) => prev - 0.025);
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

  useEffect(() => {
    if (progress4 <= 100) {
      clearInterval(progressInterval);
      setProgress();
    }
  }, [progress4]);

  return (
    <div className="container">
      {percentRange}%
      <ProgressBar percentRange={percentRange} />
      {percentRange2}%
      <ProgressBar2 percentRange2={percentRange2} />
      {percentRange3}%
      <ProgressBar3 percentRange3={percentRange3} />
      {percentRange4}%
      <ProgressBar4 percentRange4={percentRange4} />
      <div className="toggle-buttons">
        <button
          disabled={buttonStatus}
          onClick={() => {
            setProgress(percentRange <= 100 ? percentRange + 20 : 100);
            if (percentRange <= 0) {
              setProgress(20);
            }
          }}
        >
          Makan
        </button>
        <button
          disabled={buttonStatus2}
          onClick={() => {
            setProgress2(percentRange2 <= 100 ? percentRange2 + 20 : 100);
            if (percentRange2 <= 0) {
              setProgress2(20);
            }
          }}
        >
          Tidur
        </button>

        <button
          disabled={buttonStatus3}
          onClick={() => {
            setProgress3(percentRange3 <= 100 ? percentRange3 + 20 : 100);
            if (percentRange3 <= 0) {
              setProgress3(20);
            }
          }}
        >
          Main
        </button>
        <button
          disabled={buttonStatus4}
          onClick={() => {
            setProgress4(percentRange4 <= 100 ? percentRange4 + 20 : 100);
            if (percentRange4 <= 0) {
              setProgress4(20);
            }
          }}
        >
          Belajar
        </button>
      </div>
      <div class="-buttons2">
        <button
          onClick={() => {
            Kampus();
          }}
        >
          Kampus
        </button>
        <button
          onClick={() => {
            cafe();
          }}
        >
          Cafe
        </button>
        <button
          onClick={() => {
            rumah();
          }}
        >
          Rumah
        </button>
      </div>
    </div>
  );
};
