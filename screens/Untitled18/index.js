import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const Card = ({
  item
}) => {
  return <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>
          Retail Price Range per Ounce Visible
        </Text>
        <View style={styles.priceRangeContainer}>
          <Text style={styles.priceRange}>
            Lower End: ${item.priceRange[0]}
          </Text>
          <Text style={styles.priceRange}>Between: ${item.priceRange[1]}</Text>
          <Text style={styles.priceRange}>
            Higher End: ${item.priceRange[2]}
          </Text>
        </View>
      </View>
    </View>;
};

const data = [{
  id: "1",
  name: "Product 1",
  quantity: "100",
  priceRange: ["10.00", "20.00", "15.00"]
}, {
  id: "2",
  name: "Product 2",
  quantity: "200",
  priceRange: ["15.00", "25.00", "20.00"]
}, {
  id: "3",
  name: "Product 3",
  quantity: "300",
  priceRange: ["20.00", "30.00", "25.00"]
}, {
  id: "2",
  name: "Product 2",
  quantity: "200",
  priceRange: ["15.00", "25.00", "20.00"]
}, {
  id: "2",
  name: "Product 2",
  quantity: "200",
  priceRange: ["15.00", "25.00", "20.00"]
}];

const RetailPrice = () => {
  return <View style={styles.container}>
      {
      /* <View style={styles.centeredView}>
       <Text style={styles.title}>Retail Price</Text>
      </View> */
    }
      <FlatList data={data} renderItem={({
      item
    }) => <Card item={item} />} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 100
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  quantity: {
    fontSize: 16,
    color: "#666"
  },
  priceContainer: {
    marginTop: 10
  },
  priceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  priceRangeContainer: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  priceRange: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666"
  }
});
export default RetailPrice;