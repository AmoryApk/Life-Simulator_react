import React, { useState, useEffect, useReducer } from "react";
import { Button, Progressbar, Modal, ModalBody } from "react-bootstrap";
import "./progress-bar.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBCardLink
} from "mdb-react-ui-kit";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList
} from "react-native";
import eat from "./assets/eat.png";
import sleep from "./assets/sleep.png";
import play from "./assets/play.png";
import study from "./assets/study.png";

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

const initialState = {
  day: "Sunday",
  hour: 0,
  minute: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tick":
      return {
        ...state,
        minute: state.minute === 59 ? 0 : state.minute + 1
      };
    case "day":
      return {
        ...state,
        day:
          state.day === "Sunday"
            ? "Monday"
            : state.day === "Monday"
            ? "Tuesday"
            : state.day === "Tuesday"
            ? "Wednesday"
            : state.day === "Wednesday"
            ? "Thursday"
            : state.day === "Thursday"
            ? "Friday"
            : state.day === "Friday"
            ? "Saturday"
            : state.day === "Saturday"
            ? "Sunday"
            : "Sunday"
      };
    case "hour":
      return {
        ...state,
        hour: state.hour === 23 ? 0 : state.hour + 1
      };
    default:
      return state;
  }
};

export const ProgressBarContainer = (child) => {
  let [percentRange, setProgress, progress] = useState(70);
  let [percentRange2, setProgress2, progress2] = useState(100);
  let [percentRange3, setProgress3, progress3] = useState(50);
  let [percentRange4, setProgress4, progress4] = useState(0);
  const [buttonStatus, setButtonStatus] = React.useState(false);
  const [buttonStatus2, setButtonStatus2] = React.useState(false);
  const [buttonStatus3, setButtonStatus3] = React.useState(false);
  const [buttonStatus4, setButtonStatus4] = React.useState(false);
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState("Home");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [time, setTime] = useState(new Date());
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [msg, setMsg] = useState("test");
  const [judul, setJudul] = useState("test");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state.minute === 59) {
      dispatch({ type: "hour" });
      setShow(true);
      setJudul("telalu fokus kuliah sampai stress");
      setMsg("Kuliah penting namun hiburan harus terpenuhi ");
    }
  }, [state.minute]);

  useEffect(
    () => {
      if (state.hour === 23) {
        dispatch({ type: "day" });
      }
      if (state.day === "Saturday") {
        setShow(true);
      }
    },
    [state.hour],
    [state.day]
  );

  useEffect(() => {
    if (state.day === "Saturday") {
      if (count >= 1000000) {
        setJudul("Mending langsung kerja");
        setMsg("Kamu lebih fokus terhadap pekerjaan kamu ");
      }
      if (percentRange <= 10) {
        setJudul("telalu fokus sampai lupa makan");
        setMsg("Kuliah membuatmu lupa makan dah jatuh sakit ");
      }
      if (percentRange2 <= 10) {
        setJudul("telalu fokus sampai lupa tidur");
        setMsg("Kuliah membuatmu lupa tidur dah jatuh sakit ");
      }
      if (percentRange3 <= 10 && percentRange4 >= 80) {
        setJudul("telalu fokus kuliah sampai stress");
        setMsg("Kuliah penting namun hiburan harus terpenuhi ");
      }
      if (percentRange4 <= 10) {
        setJudul("tidak fokus dengan kuliahhmu");
        setMsg(
          "Kuliah pentingpenting untuk masa depan. Mungkin waktunya ganti program studi yang cocok."
        );
      }
      setShow(true);
    }
  }, [state.day]);

  useEffect(() => {
    setProgress(50);
    setProgress2(50);
    setProgress3(50);
    setProgress4(0);
  }, []);

  function loc1(pass) {
    setLocation("Kampus");
  }

  function loc2(pass) {
    setLocation("cafe");
  }

  function loc3(pass) {
    setLocation("Home");
  }

  const Increase = () => {
    console.log("clicked");
    setCount(count + 1000);
  };

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kamu {judul}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      <h2>{location}</h2>
      <h4>Rp.{count}</h4>
      <div className="container">
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.progressBarContainer}>
            <img src={eat} alt="eat" className="photo" />
            <ProgressBar percentRange={percentRange} />
          </View>
          <View style={styles.progressBarContainer}>
            <img src={sleep} alt="sleep" className="photo" />
            <ProgressBar2 percentRange2={percentRange2} />
          </View>
          <View style={styles.progressBarContainer}>
            <img src={play} alt="play" className="photo" />
            <ProgressBar3 percentRange3={percentRange3} />
          </View>
          <View style={styles.progressBarContainer}>
            <img src={study} alt="study" className="photo" />
            <ProgressBar4 percentRange4={percentRange4} />
          </View>
        </View>
        <div className="toggle-buttons">
          <div>
            <Button
              variant="primary"
              disabled={buttonStatus}
              onClick={() => {
                if (count >= 5000) {
                  setProgress(percentRange <= 100 ? percentRange + 10 : 100);
                  if (percentRange <= 0) {
                    setProgress(0);
                  }
                  setCount(count - 5000);
                }
              }}
            >
              Makan
            </Button>
            <Button
              variant="primary"
              disabled={buttonStatus2}
              onClick={() => {
                setProgress2(percentRange2 <= 100 ? percentRange2 + 20 : 100);
                if (percentRange2 <= 0) {
                  setProgress2(20);
                }
              }}
            >
              Tidur
            </Button>

            <Button
              variant="primary"
              disabled={buttonStatus3}
              onClick={() => {
                setProgress3(percentRange3 <= 100 ? percentRange3 + 20 : 100);
                if (percentRange3 <= 0) {
                  setProgress3(20);
                }
              }}
            >
              Main
            </Button>
            <Button
              variant="primary"
              disabled={buttonStatus4}
              onClick={() => {
                setProgress4(percentRange4 <= 100 ? percentRange4 + 20 : 100);
                if (percentRange4 <= 0) {
                  setProgress4(20);
                }
              }}
            >
              Belajar
            </Button>
            <Button variant="primary" onClick={Increase}>
              Kerja
            </Button>
          </div>
        </div>
        <h4>Location</h4>

        <div className="toggle-buttons">
          <div>
            <Button
              variant="primary"
              onClick={() => {
                Kampus();
                loc1();
              }}
            >
              Kampus
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                cafe();
                setLocation("Cafe");
              }}
            >
              Cafe
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                rumah();
                setLocation("Home");
              }}
            >
              Rumah
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
