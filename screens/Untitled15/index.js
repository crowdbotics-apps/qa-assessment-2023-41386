import React from "react";
import { SafeAreaView, View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const Untitled15 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./investment-removebg-preview.png")} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => {
          // navigation.navigate("termsAndConditions")
          navigation.navigate("Terms and Conditions");
        }}>
            <Text style={styles.buttonText}>Terms and conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contact-Us")}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Privacy Policy")}>
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("aboutTheApp")}>
            <Text style={styles.buttonText}>About us</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonLong} onPress={() => {
        // navigation.navigate("Untitled24")
        navigation.navigate("Login");
      }}>
          <Text style={styles.buttonText}>Sign Up / Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 120,
    height: 120
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    height: 60,
    justifyContent: "center",
    marginHorizontal: 10
  },
  buttonLong: {
    backgroundColor: "black",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    width: 380,
    height: 60,
    justifyContent: "center",
    marginHorizontal: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
export default Untitled15;