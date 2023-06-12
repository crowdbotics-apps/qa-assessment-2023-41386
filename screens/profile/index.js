import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = ({
  navigation
}) => {
  const fullName = 'John Doe';
  const email = 'johndoe@example.com';

  const handleEditProfile = () => {
    navigation.navigate("ProfileScreenCopy");
  };

  return <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Profile</Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{fullName}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    padding: 16
  },
  content: {
    flex: 1,
    marginTop: 100
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 86,
    textAlign: 'center'
  },
  fieldContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  value: {
    fontSize: 16
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 25
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Profile;