import { Pressable } from "react-native";
import React from "react";
import { ScrollView, Text, View, StyleSheet, TouchableHighlight, TextInput } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const Profile = ({
  navigation
}) => {
  return <ScrollView>
      <View style={styles.mainContainer}>
      <Text style={styles.heading}>Edit Profile</Text>
        <View style={styles.mainBody}>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>First Name</Text>
            <Input placeholder="First name" />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Last Name</Text>
            <Input placeholder="Last name" />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Date of Birth</Text>
            <Input placeholder="Date of Birth" />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Email</Text>
            <Input placeholder="Email Address" isEditable={false} />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Address</Text>
            <Input placeholder="Address" />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Zip code</Text>
            <Input placeholder="Zip code" />
          </View>

          <View style={styles.mt15}>
            <Text style={styles.textLabel}>City</Text>
            <Input placeholder="City name" />
          </View>

          <View style={styles.mt15}>
            <Text style={styles.textLabel}>State</Text>
            <Input placeholder="Name of state" />
          </View>
        </View>
        <View style={styles.btnSave}>
          <Button onPress={pressed} height={49}>
            Update
          </Button>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFF"
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 66,
    marginTop: 20,
    textAlign: 'center'
  },
  mt15: {
    marginTop: 15
  },
  textLabel: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "bold"
  },
  mainBody: {// height: '60%'
  },
  btnSave: {
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    width: "80%"
  }
});
export default Profile;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <Pressable>
        <View style={[btnStyles.button, {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
        height: props.height ? props.height : 49,
        borderWidth: props.borderWidth ? props.borderWidth : 0,
        borderColor: props.borderColor ? props.borderColor : "#000000"
      }]}>
          <Text style={[btnStyles.text, {
          color: props.color ? props.color : "#ffffff"
        }]}>
            {props.children}
          </Text>
        </View>
      </Pressable>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});

const Input = props => {
  return <View>
      <TextInput style={inputStyles.input} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor="#ddd" editable={props.editable !== false} />
      {props.errorText ? <Text style={inputStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 53,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 15
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});