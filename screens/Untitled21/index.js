import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Image, Text, Pressable } from "react-native";
import SpotPrices from "../Untitled17";
import RetailPrice from "../Untitled18";
import MakeAnOffer from "../Untitled19";

const Untitled21 = ({
  navigation
}) => {
  const [currentTab, setCurrentTab] = useState('Spot Price');
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      position: "relative",
      flex: 1
    }}>
        <View style={styles.muaMPLcp}>
          <View style={styles.buttonView}>
            <Text style={styles.heading}>{currentTab}</Text>
            <View style={styles.iVinfpmg}>
              <Pressable onPress={() => {
              navigation.navigate("Untitled20");
            }}>
                <Image source={require("./icons8-coins-50.png")} style={[styles.buttonStyles, styles.TCQXckBo]} />
              </Pressable>

              <Pressable onPress={() => {
              navigation.navigate("Untitled23");
            }}>
                <Image source={require("./icons8-settings-50.png")} style={[styles.buttonStyles]} />
              </Pressable>
            </View>
          </View>
          <View style={styles.wdsTNeKA}>
            {currentTab === 'Spot Price' && <SpotPrices />}
            {currentTab === 'Retail Price' && <RetailPrice />}
            {currentTab === 'Make An Offer' && <MakeAnOffer />}

          </View>

          <View style={styles.tabContainer}>
            <Pressable onPress={() => {
            // navigation.navigate("Untitled17")
            setCurrentTab('Spot Price');
          }} style={styles.tab}>
              <Image style={styles.mzYtvhsR} source={require("./icons8-crypto-trading-spot-50.png")} // source={require("./icons8-coins-50.png")}
            />
              <Text style={styles.bottomText}>Spot price</Text>
            </Pressable>
            <Pressable onPress={() => {
            // navigation.navigate("Untitled18")
            setCurrentTab('Retail Price');
          }} style={styles.tab}>
              <Image style={styles.mzYtvhsR} source={require("./icons8-price-tag-50.png")} />
              <Text style={styles.bottomText}>Retail Value</Text>
            </Pressable>
            <Pressable onPress={() => {
            // navigation.navigate("Untitled19")
            setCurrentTab("Make An Offer");
          }} style={styles.tab}>
              <Image style={styles.mzYtvhsR} source={require("./icons8-macbook-money-50.png")} />
              <Text style={styles.bottomText}>Make offer</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  heading: {
    marginLeft: 10,
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "700"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700"
  },
  buttonStyles: {
    height: 40,
    width: 40
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingRight: 10
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: "absolute",
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#000",
    bottom: 5,
    left: 0,
    right: 0
  },
  bottomText: {
    marginTop: 5
  },
  tab: {
    flex: 1,
    alignItems: "center"
  },
  mzYtvhsR: {
    width: 42,
    height: 42
  },
  muaMPLcp: {
    justifyContent: "space-between",
    flex: 1
  },
  lykZSeiA: {
    marginLeft: 20
  },
  vYFhkmHw: {
    width: 107,
    height: 62,
    position: "absolute",
    top: 154,
    left: 33
  },
  TCQXckBo: {
    marginRight: 20
  },
  iVinfpmg: {
    flexDirection: "row"
  },
  wdsTNeKA: {
    backgroundColor: "#fff",
    height: "95%"
  }
});
export default Untitled21;