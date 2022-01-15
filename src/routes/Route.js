import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BooksScreen from "../screens/Books/BooksScreen"
import AddBookScreen from "../screens/Books/AddBookScreen"
const Stack = createNativeStackNavigator();
import { Image, TouchableOpacity, StyleSheet, } from 'react-native';

const RouteNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff'
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator >
        <Stack.Screen name="BooksScreen" component={BooksScreen}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            title: "Home",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('AddBookScreen')} style={{ padding: 10, paddingLeft: 15 }}>
                <Image
                  height={50}
                  width={50}
                  style={styles.headerIcon}
                  source={require('../../assets/add.png')}

                />
              </TouchableOpacity>
            ),

          })}
        />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen}
          options={() => ({
            title: 'Home',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerIcon: {
    paddingHorizontal: 10,
    width: 40,
    height: 40,
  },
  contentStyle: {
    backgroundColor: "#000000"
  }
})

export default RouteNavigator

// //   options={{
//   headerRight: () => (
//     <Button
//       onPress={() => props.navigation.navigate('Books')}
//       title="Add new book"
//     />
//   ),
// }}
// options={{ headerShown: false }}