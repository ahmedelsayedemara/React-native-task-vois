
import React, { useEffect, useState } from 'react';

import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddBook = (props) => {
  const [{
    username, password, email, phone_number
  }, setState] = useState([])

  const state = {
    username: '', password: '', email: '', phone_number: ''
  }
  const onChangeText = (key, val) => {
    setState({ [key]: val })
  }
  const signUp = async () => {
    const { username, password, email, phone_number } = state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => onChangeText('username', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => onChangeText('password', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => onChangeText('email', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone Number'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => onChangeText('phone_number', val)}
      />
      <Button
        title='Sign Up'
        onPress={signUp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: 1000
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AddBook
