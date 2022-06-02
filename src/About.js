import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/");
  };
  return (
    <ScrollView>
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
      <View style={styles.container}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.text}>
          We are a group of students from the Universitas Multimedia Nusantara
          studying Informatics.
        </Text>
        <Text style={styles.text}>
          The goal of this project is to create a web application “7 Days
          Student”, a student life simulation game application for one week (7
          days) using React.js.
        </Text>
        <Text style={styles.text}>
          We hope you enjoy using our application!
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.profilePic}>
            {/* <Image source={require('../../assets/images/profile.jpg')} style={styles.profilePic} /> */}
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Dirsya Arrosyid Arsyad</Text>
            <Text style={styles.profileNIM}>00000053741</Text>
            <Text style={styles.profileDescription}>IF231-F</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.profilePic}>
            {/* <Image source={require('../../assets/images/profile2.jpg')} style={styles.profilePic} /> */}
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Felix Sutanto</Text>
            <Text style={styles.profileNIM}>00000045539</Text>
            <Text style={styles.profileDescription}>IF231-F</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.profilePic}>
            {/* <Image source={require('../../assets/images/profile3.jpg')} style={styles.profilePic} /> */}
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Matthew</Text>
            <Text style={styles.profileNIM}>00000045782</Text>
            <Text style={styles.profileDescription}>IF231-F</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.profilePic}>
            {/* <Image source={require('../../assets/images/profile4.jpg')} style={styles.profilePic} /> */}
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              Sabilillah Amory Reyhan Rusjdi
            </Text>
            <Text style={styles.profileNIM}>00000054377</Text>
            <Text style={styles.profileDescription}>IF231-F</Text>
          </View>
        </View>
      </View>
      <div className="footer">
        <div className="footer-about">
          <div className="footer-about-content">
            <button className="btn btn-secondary" onClick={navigateToAbout}>
              App
            </button>
          </div>
        </div>
      </div>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 30,
    fontFamily: "HelveticaNeue-Bold",
    color: "#000",
    marginBottom: 30,
    marginTop: 40
  },
  text: {
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light",
    color: "#000",
    marginBottom: 20,
    marginTop: 20
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: 20,
    marginTop: 20
  },
  profileInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20
  },
  profileName: {
    fontSize: 20,
    fontFamily: "HelveticaNeue-Bold",
    color: "#000",
    marginBottom: 20,
    marginTop: 20
  },
  profileNIM: {
    fontSize: 20,
    fontFamily: "HelveticaNeue-Bold",
    color: "#000",
    marginBottom: 20,
    marginTop: 20
  },
  profileDescription: {
    fontSize: 20,
    fontFamily: "HelveticaNeue-Light",
    color: "#000",
    marginBottom: 20,
    marginTop: 20
  }
});
