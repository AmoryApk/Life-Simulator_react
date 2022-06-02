// import React, { Component } from "react";
// import { ProgressBarContainer } from "./ProgressBar";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ProgressBarContainer percenRange={25} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        values: {
          ...state.values,
          [action.name]: action.value
        },
        errors: {
          ...state.errors,
          [action.name]: action.error
        }
      };
    case "SET_DATA":
      return {
        ...state,
        values: action.values,
        errors: action.errors
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

function App() {
  const navigate = useNavigate();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    values: {
      name: "",
      avatar: "",
      studyProgram: []
    },
    errors: {}
  });

  const [avatar, setAvatar] = useState("");
  const [course, setCourse] = useState("");
  const [studyProgram, setStudyProgram] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState.values);
    navigate("/home");
  };

  const handleInputChange = (event) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    let error = "";
    if (name === "avatar") {
      if (value === "") {
        error = "Please select an avatar";
      }
    }
    if (name === "name") {
      if (value.length < 3) {
        error = "Name is too short";
      }
    }
    if (name === "studyProgram") {
      if (value.length < 2) {
        error = "Please select at least 2 study programs";
      }
    }
    dispatchFormState({
      type: "INPUT_CHANGE",
      name: name,
      value: value,
      error: error
    });
  };

  const handleSetData = () => {
    dispatchFormState({
      type: "SET_DATA",
      values: {
        name: "",
        avatar: "",
        studyProgram: []
      },
      errors: {}
    });
  };

  const handleSetErrors = () => {
    dispatchFormState({
      type: "SET_ERRORS",
      errors: {}
    });
  };

  const onImageChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FontAwesomeIcon icon="fas fa-trophy" />
        <h1>UAS</h1>
        <h1>7 Day Student</h1>
        <div className="App-header-right">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <Avatar name={formState.values.name} size={10} round={true} />
          <select
            className="form-control"
            name="avatar"
            id="avatar"
            value={formState.values.avatar}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an avatar</option>
            <option
              value="https://avatars.dicebear.com/v2/avataaars/matthew.png"
              onClick={onImageChange}
            >
              <Avatar
                name="Matthew"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/matthew.png"
              />
              Matthew
            </option>
            <option
              value="
                https://avatars.dicebear.com/v2/avataaars/molly.png"
            >
              <Avatar
                name="Molly"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/molly.png"
              />
              Molly
            </option>
            <option
              value="
                https://avatars.dicebear.com/v2/avataaars/daniel.png"
            >
              <Avatar
                name="Daniel"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/daniel.png"
              />
              Daniel
            </option>
            <option
              value="
                https://avatars.dicebear.com/v2/avataaars/james.png"
            >
              <Avatar
                name="James"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/james.png"
              />
              James
            </option>
            <option
              value="
                https://avatars.dicebear.com/v2/avataaars/kate.png"
            >
              <Avatar
                name="Kate"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/kate.png"
              />
              Kate
            </option>
            <option
              value="
                https://avatars.dicebear.com/v2/avataaars/sebastian.png"
            >
              <Avatar
                name="Sebastian"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/sebastian.png"
              />
              Sebastian
            </option>
            <option
              value="
                https://avatars.dicebear.com/v2/avataaars/jenny.png"
            >
              <Avatar
                name="Jenny"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/jenny.png"
              />
              Jenny
            </option>
            <option
              value="
                https://avatars.dicebear.com/v2/avataaars/kyle.png"
            >
              <Avatar
                name="Kyle"
                size={10}
                round={true}
                src="https://avatars.dicebear.com/v2/avataaars/kyle.png"
              />
              Kyle
            </option>
          </select>
          {formState.errors.avatar && (
            <div className="alert alert-danger">{formState.errors.avatar}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={formState.values.name}
            onChange={handleInputChange}
            required
          />
          {formState.errors.name && (
            <div className="alert alert-danger">{formState.errors.name}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="studyProgram">Study Program</label>
          <select
            name="studyProgram"
            id="studyProgram"
            className="form-control"
            value={formState.values.studyProgram}
            onChange={handleInputChange}
            multiple
            required
          >
            <option value="">Choose your study program</option>
            <option value="Informatics">Informatics</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business">Business</option>
            <option value="Economics">Economics</option>
            <option value="Law">Law</option>
            <option value="Medicine">Medicine</option>
            <option value="Psychology">Psychology</option>
            <option value="Sociology">Sociology</option>
            <option value="Social Science">Social Science</option>
          </select>
          {formState.errors.studyProgram && (
            <div className="alert alert-danger">
              {formState.errors.studyProgram}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          START
        </button>
      </form>
      <div>
        <button onClick={handleSetData}>Set Data</button>
        <button onClick={handleSetErrors}>Set Errors</button>
      </div>
      <div>
        <p>Avatar: {formState.values.avatar}</p>
        <p>Name: {formState.values.name}</p>
        <p>Study Program: {formState.values.studyProgram}</p>
      </div>
      <div className="footer">
        <div className="footer-about">
          <div className="footer-about-content">
            <button className="btn btn-secondary" onClick={navigateToAbout}>
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
