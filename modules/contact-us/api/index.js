// @ts-ignore
import { getGlobalOptions } from "@options"
const global = getGlobalOptions()
const BASE_URL = global.url
export const sendQuery = async data => {
  try {
    const response = await fetch(`${BASE_URL}/modules/contact-us/contact_us/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    console.log("repsonse", response)
    return response
  } catch (error) {
    console.log("RESPONSE", error.response)
    Alert.alert("Error", error.message)
    throw new Error()
  }
}
