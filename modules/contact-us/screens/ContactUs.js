import React, { useContext } from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native" // @ts-ignore

import emailIcon from "../emailIcon.png"
import { OptionsContext } from "@options"

const ContactUs = props => {
  const options = useContext(OptionsContext)
  return (
    <View style={styles.pt30}>
      <Text style={styles.YsOxQmMo}>
        We value your feedback and are here to assist you. Please use the
        following information to get in touch with us: General Inquiries: If you
        have any general questions, comments, or suggestions regarding our app,
        please reach out to our team at [email address]. We will do our best to
        respond to your inquiry promptly. Technical Support: For technical
        assistance or if you encounter any issues while using our app, please
        contact our support team at [support email address]. Please provide
        detailed information about the problem you are experiencing, including
        any error messages or steps to reproduce the issue. Our support team
        will work diligently to help resolve any technical difficulties.
        Business Partnerships: If you are interested in exploring partnership
        opportunities or have any business-related inquiries, please contact our
        partnership team at [partnership email address]. We are open to
        collaborations and would be happy to discuss potential synergies.
      </Text>
      <View style={styles.email}>
        <View style={styles.mr15}>
          <Image source={emailIcon} style={styles.image} />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ContactForm")}
          >
            <Text style={styles.text}>{options.email}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Image source={require("../phone.png")} style={styles.phoneImage} />
        <Text style={styles.infoText}>+1 111 111 1111</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  email: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30
  },
  phoneImage: {
    height: 27,
    width: 27
  },
  pt30: {
    padding: 30
  },
  image: {
    height: 20,
    width: 25
  },
  mr15: {
    marginRight: 15
  },
  text: {
    color: "#284752",
    fontSize: 15
  },
  YsOxQmMo: {
    fontSize: 15
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  infoText: {
    fontSize: 14,
    marginLeft: 15
  }
})
export default ContactUs
