import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Login2 = ({
  navigation
}) => {
  return <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Untitled21")}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Text style={styles.signupButton}>Signup.</Text>
        </View>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 80,
    marginTop: 130,
    alignSelf: "center"
  },
  input: {
    marginHorizontal: 20,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  forgotPassword: {
    marginTop: 10,
    color: "#000",
    alignSelf: "flex-end",
    marginHorizontal: 20
  },
  loginButton: {
    backgroundColor: "black",
    width: "80%",
    height: 50,
    alignSelf: "center",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center"
  },
  signupText: {
    fontSize: 16,
    alignSelf: "center"
  },
  signupButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue"
  }
});
export default Login2;