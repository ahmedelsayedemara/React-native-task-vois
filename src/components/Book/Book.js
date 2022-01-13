import { StyleSheet, Text, View, Image } from 'react-native';

const book = (props) => {

  return (
    <View style={styles.bookContainer}>
      <Image style={styles.thumbnail}
        source={{
          uri: props.book.volumeInfo.imageLinks.thumbnail,
        }} />
      <View style={styles.bookBody} >
        <Text numberOfLines={1} style={styles.title}>{props.book.volumeInfo.title}</Text>
        <Text numberOfLines={2} style={styles.description}>{props.book.volumeInfo.description}</Text>
        <Text style={styles.date}>{props.book.volumeInfo.publishedDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e1e1e1",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: "#e1e1e1",
    borderRadius: 50,
    marginEnd: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
  ,
  bookBody: {
    flex: 1
  }
  ,
  date: {
    color: "red",
    marginVertical: 2
  }

});


export default book