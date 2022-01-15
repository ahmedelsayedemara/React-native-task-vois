
import React from 'react';
import { Alert } from 'react-native';

import AddBook from '../../components/Book/AddBook';


const AddBookScreen = (props) => {
  const handleAddBook = (values) => {
    console.log('object :>> ', values);
    Alert.alert(
      "Done",
      "Book added successfully",
      [
        { text: "OK", onPress: () => props.navigation.navigate('BooksScreen') }
      ]
    );


  }


  return (
    <AddBook AddBook={handleAddBook} />
  )
}

export default AddBookScreen