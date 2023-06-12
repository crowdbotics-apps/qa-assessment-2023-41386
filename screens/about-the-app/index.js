import React, { useState, useEffect } from "react"
import { Text, StyleSheet, View, SafeAreaView } from "react-native"

const AboutTheAppScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Welcome your go-to platform for convenient and secure coin trading. We
          are passionate about providing users with a seamless and reliable
          experience in the exciting world of digital currency. Our
        </Text>
        <Text style={styles.text}>
          Mission: Our mission is to empower individuals to participate in the
          global cryptocurrency market with confidence and ease. We strive to
          make coin trading accessible to both beginners and experienced traders
          by offering user-friendly features and comprehensive tools.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  rgVPtOhG: {
    position: "absolute",
    left: 0,
    top: -8
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
  },
  textContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    textAlign: "justify",
    lineHeight: 24,
    marginVertical: 10
  },
  rgVPtOhF: {
    width: 38,
    height: 35
  },
  DgLOWoTe: {
    width: 100,
    height: 32,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    top: 16,
    left: 133,
    fontWeight: "700"
  }
})
export default AboutTheAppScreen
