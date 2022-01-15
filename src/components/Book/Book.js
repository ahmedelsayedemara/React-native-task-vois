import { StyleSheet, Text, View, Image } from 'react-native';
import {COLORS} from '../../constants';

const book = (props) => {

  return (
    <View style={styles.bookContainer}>
      <Image style={styles.thumbnail}
        source={{
          uri: props.book.volumeInfo?.imageLinks?.thumbnail,
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
    borderColor: COLORS.secondColor,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: COLORS.secondColor,
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
    color: COLORS.primaryColor,
    marginVertical: 2,
    fontSize: 14,
    fontWeight: "600"
  }

});


export default book