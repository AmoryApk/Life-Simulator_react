import React, { useEffect, useNative, useState } from "react";
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
  Button,
  FlatList
} from "react-native";
import { CButton } from "@coreui/react";
import ProgressBar from "react-native-progress/Bar";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

const initialState = {
  eat: 50,
  sleep: 50,
  play: 50,
  study: 0,
  progress: 50,
  progressInterval: null,
  progressIntervalTime: 1000,
  progressIntervalTimeMin: 1000,
  progressIntervalTimeMax: 5000,
  progressIntervalTimeStep: 1000
};

function PGV2() {
  const [state, setState] = useState(initialState);
  const [progressInterval, setProgressInterval] = useState(null);
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
    if (state.progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [state.progress]);

  useEffect(() => {
    if (state.progress <= 0) {
      clearInterval(progressInterval);
    }
  }, [state.progress]);

  useEffect(() => {
    return () => {
      clearInterval(progressInterval);
    };
  }, [progressInterval]);

  function onEat() {
    if (state.eat >= 100) {
      Alert.alert("Error", "You are already at the maximum eat value");
    } else {
      setState({
        ...state,
        eat: state.eat + 10,
        sleep: state.sleep - 5,
        play: state.play - 5,
        study: state.study - 5
      });
    }
  }

  function onSleep() {
    if (state.sleep >= 100) {
      Alert.alert("Error", "You are already at the maximum sleep value");
    } else {
      setState({
        ...state,
        eat: state.eat - 5,
        sleep: state.sleep + 10,
        play: state.play - 5,
        study: state.study - 5
      });
    }
  }

  function onPlay() {
    if (state.play >= 100) {
      Alert.alert("Error", "You are already at the maximum play value");
    } else {
      setState({
        ...state,
        eat: state.eat - 5,
        sleep: state.sleep - 5,
        play: state.play + 10,
        study: state.study - 5
      });
    }
  }

  function onStudy() {
    if (state.study >= 100) {
      Alert.alert("Error", "You are already at the maximum study value");
    } else {
      setState({
        ...state,
        eat: state.eat - 5,
        sleep: state.sleep - 5,
        play: state.play - 5,
        study: state.study + 10
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            progress={state.eat / 100}
            width={200}
            height={20}
            borderWidth={0}
            color={"#00aaff"}
            unfilledColor={"#3e3e3e"}
          />
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            progress={state.sleep / 100}
            width={200}
            height={20}
            borderWidth={0}
            color={"#00aaff"}
            unfilledColor={"#3e3e3e"}
          />
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            progress={state.play / 100}
            width={200}
            height={20}
            borderWidth={0}
            color={"#00aaff"}
            unfilledColor={"#3e3e3e"}
          />
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            progress={state.study / 100}
            width={200}
            height={20}
            borderWidth={0}
            color={"#00aaff"}
            unfilledColor={"#3e3e3e"}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.button} onPress={onEat}>
          <Text style={styles.buttonText}>Eat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSleep}>
          <Text style={styles.buttonText}>Sleep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPlay}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onStudy}>
          <Text style={styles.buttonText}>Study</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  progressBarContainer: {
    width: 200,
    height: 20,
    margin: 10
  },
  button: {
    backgroundColor: "#00aaff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 100
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  }
});

export default PGV2;
