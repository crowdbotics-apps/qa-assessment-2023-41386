import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CoinDetailScreen = ({
  route
}) => {
  const {
    item
  } = route.params || {};
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
      }} style={styles.coinIcon} />
        <Text style={styles.coinName}>{item?.title}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Lower Price:</Text>
          <Text style={styles.priceValue}>${item?.lower_price}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Higher Price:</Text>
          <Text style={styles.priceValue}>${item?.lower_price}</Text>
        </View>
        <View style={styles.metalContainer}>
          <Text style={styles.metalLabel}>Metal Type:</Text>
          <Text style={styles.priceValue}>Gold</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  coinIcon: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  coinName: {
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10
  },
  priceValue: {
    fontSize: 18
  },
  metalContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  metalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10
  },
  metalIcon: {
    width: 30,
    height: 30
  }
});
export default CoinDetailScreen;