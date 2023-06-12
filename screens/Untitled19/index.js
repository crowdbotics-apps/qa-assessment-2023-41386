import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";

const Card = ({
  item
}) => {
  return <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.text}>Quantity: {item.quantity}</Text>
      <Text style={styles.text}>Spot Price: {item.spotPrice}</Text>
      <Text style={styles.text}>
        Retail Price Range: {item.retailPriceRange}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Lower End Price: {item.lowerEndPrice}</Text>
        <Text style={styles.price}>
          Higher End Price: {item.higherEndPrice}
        </Text>
        <Text style={styles.price}>Between Price: {item.betweenPrice}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Make me an offer</Text>
      </TouchableOpacity>
    </View>;
};

const data = [{
  id: "1",
  name: "Product 1",
  quantity: 10,
  spotPrice: 100,
  retailPriceRange: "100-200",
  lowerEndPrice: 80,
  higherEndPrice: 120,
  betweenPrice: 100
}, {
  id: "2",
  name: "Product 2",
  quantity: 20,
  spotPrice: 200,
  retailPriceRange: "200-300",
  lowerEndPrice: 180,
  higherEndPrice: 220,
  betweenPrice: 200
}, {
  id: "3",
  name: "Product 3",
  quantity: 30,
  spotPrice: 300,
  retailPriceRange: "300-400",
  lowerEndPrice: 280,
  higherEndPrice: 320,
  betweenPrice: 300
}];

const MakeAnOffer = () => {
  return <View style={styles.container}>
      {
      /* <Text style={styles.heading}>Offers</Text> */
    }
      <FlatList data={data} renderItem={({
      item
    }) => <Card item={item} />} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 100,
    paddingTop: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center"
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  price: {
    fontSize: 16
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
export default MakeAnOffer;