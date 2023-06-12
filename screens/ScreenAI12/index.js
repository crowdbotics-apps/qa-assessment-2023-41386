import { Pressable } from "react-native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Coin Offer</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
      }} style={styles.image} />
        <Text style={styles.contentText}>
          Explore our coin offers and find the best deals for you!
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{
          uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
        }} style={styles.footerIcon} />
          <Text style={styles.footerText}>Spot price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Pressable onPress={() => {// navigation.navigate("ScreenAI14")
        }}>
            <Image source={{
            uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
          }} style={styles.footerIcon} />
          </Pressable>
          <Pressable onPress={() => {// navigation.navigate("ScreenAI13")
        }}>
            <Text style={styles.footerText}>Retail price</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{
          uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
        }} style={styles.footerIcon} />
          <Pressable onPress={() => {// navigation.navigate("profile")
        }}>
            <Text style={styles.footerText}>Make me an offer</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 80,
    backgroundColor: "#f4511e",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  contentText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 20
  },
  footer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc"
  },
  footerButton: {
    justifyContent: "center",
    alignItems: "center"
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginBottom: 5
  },
  footerText: {
    fontSize: 12,
    color: "#333"
  }
});
export default HomeScreen;