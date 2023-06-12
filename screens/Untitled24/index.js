import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TextInput, Pressable, TouchableOpacity } from "react-native";

const Untitled24 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#fff",
      padding: 10,
      position: "relative",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
          <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
        </View>
        <View style={styles.checkboxContainer}>
          <Pressable style={styles.checkbox}></Pressable>
          <Text style={styles.checkboxText}>
            I have read the terms and conditions
          </Text>
        </View>
        <Pressable style={styles.signupButton} onPress={() => {
        navigation.navigate("login2");
      }}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate("login2")}>
        <Text style={styles.loginText}>Already have an account? Login</Text>

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 70
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 10
  },
  checkboxText: {
    fontSize: 16
  },
  signupButton: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center"
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18
  },
  loginText: {
    marginTop: 20,
    fontSize: 16
  }
});
export default Untitled24;