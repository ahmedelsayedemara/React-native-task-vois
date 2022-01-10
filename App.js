
import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import ApiService from './src/api/ApiService';
import { getLoadBooksRequest } from './src/api/books';

import Book from './src/components/Books/Book';

export default function App() {
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
      <SafeAreaView style={styles.container}>
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
                renderItem={({ item, index, separators }) => (
                  <Book
                    key={item.id}
                    book={item} />
                )}
              />
            )
        }
      </SafeAreaView>
    </View >
  );
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
