
import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  FlatList, ActivityIndicator } from 'react-native';

import ApiService from '../../api/ApiService';
import { getLoadBooksRequest } from '../../api/books';

import Book from '../../components/Book/Book';



const Books = (props) => {
  const [isLoading, setLoading] = useState(false)
  const [books, setBooks] = useState([])


  useEffect(() => {
    getLoadBooks()
  }, [])

  const getLoadBooks = () => {
    setLoading(true)
    ApiService(getLoadBooksRequest()).then(({ data }) => {
      setBooks(data.items)

    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <View style={[styles.container, isLoading ? styles.app : null]}>
      <StatusBar style="auto" />
      {
        isLoading ?
          (
            <ActivityIndicator size="large" />
          )
          :
          (

            <FlatList
              data={books}
              renderItem={({ item }) => (
                <Book
                  key={item.id}
                  book={item} />
              )}
            />
          )
      }
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Books
