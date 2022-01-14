import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Books from "../views/Books/list"
import AddBook from "../views/Books/AddBook"
const Stack = createNativeStackNavigator();
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const RouteNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator >

        <Stack.Screen name="Books" component={Books}

          options={({ navigation }) => ({

            animation: 'slide_from_right',
            headerTitleAlign: "center",
            title: "Home",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('AddBook')}>
                <Image
                  style={styles.headerIcon}
                  source={require('../../assets/add.svg')}

                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="AddBook" component={AddBook}
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
    width: 28,
    height: 28
  },
  contentStyle: {
    backgroundColor: "#000"
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