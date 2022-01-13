import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Books from "../views/Books/list"
import AddBook from "../views/Books/AddBook"
const Stack = createNativeStackNavigator();
import { Button } from 'react-native';

const RouteNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Books" component={Books}

          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('AddBook')}
                title="Add new book"
              />
            ),
          })}
        />
        <Stack.Screen name="AddBook" component={AddBook}
          options={() => ({
            title: 'Add new book',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

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