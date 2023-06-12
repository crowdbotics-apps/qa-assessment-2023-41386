import React from "react"
import { StyleSheet, View, Text, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"

const SpotPrices = () => {
  const data = [
    {
      id: "1",
      name: "Test Name 1",
      quantity: 3,
      price: 45
    },
    {
      id: "2",
      name: "Test Name 2",
      quantity: 2,
      price: 30
    },
    {
      id: "3",
      name: "Test Name 3",
      quantity: 1,
      price: 15
    },
    {
      id: "3",
      name: "Test Name 3",
      quantity: 1,
      price: 15
    },
    {
      id: "3",
      name: "Test Name 3",
      quantity: 1,
      price: 15
    }
  ]

  const dispatch = useDispatch()

  const state = useSelector(state => state)
  console.log("STATEEE", state)

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Spot prices</Text> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollStyles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 100
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  cardBody: {
    padding: 20
  },
  scrollStyles: {
    paddingVertical: 20
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5
  },
  price: {
    fontSize: 18,
    fontWeight: "bold"
  }
})
export default SpotPrices
