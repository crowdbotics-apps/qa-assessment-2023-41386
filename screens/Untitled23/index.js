import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Pressable } from "react-native";

const Untitled23 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Settings</Text>
        </View>
        <Pressable style={styles.button} onPress={() => {
        navigation.navigate("profile");
      }}>
          <Text style={styles.buttonText}>View Profile</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  headingContainer: {
    alignItems: "center",
    marginTop: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    marginTop: 80,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});
export default Untitled23;