import { StyleSheet } from "react-native"
import React, { useEffect, useState, useContext } from "react"
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions
} from "react-native"
import { styles } from "./styles"
import HTML from "react-native-render-html"
import { GlobalOptionsContext } from "@options"


const PrivacyPolicy = ({ navigation }) => {
  const contentWidth = useWindowDimensions().width
  const globalOptions = useContext(GlobalOptionsContext)

  const [htmlContent, setHtmlContent] = useState(
    "<h3> Loading Privacy Policy... </h3>"
  )
  useEffect(() => {
    // change the root url below to your project's url.
    fetch(`${globalOptions.url}/modules/privacy-policy/`)
      .then(response => response.json())
      .then(data => setHtmlContent(data[0].body))
      .catch(err => {
        console.log(err)
        setHtmlContent(
          "<h3> Privacy Policy could not be loaded at this time.</h3>"
        )
      })
  })
  return (
    <View style={_styles.vKcRZSZR}>
      <View style={styles.heading}>
        <TouchableOpacity
          style={styles.touchableopacity}
          onPress={() => {
            navigation.goBack()
          }}
        ></TouchableOpacity>
        <Text style={styles.header}>Privacy Policy</Text>
      </View>
      <ScrollView style={_styles.PAlWirEE}>
        <HTML
          source={{
            html: htmlContent
          }}
          contentWidth={contentWidth}
          style={styles.heading}
        />
      </ScrollView>
    </View>
  )
}

export default {
  title: "Privacy Policy",
  navigator: PrivacyPolicy
}

const _styles = StyleSheet.create({
  vKcRZSZR: {
    flex: 1,
    paddingHorizontal:20
  },
  PAlWirEE: {
    flex: 1
  }
})
