import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {MovieScreen} from '../screens/MovieScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        component={HomeScreen}
        name="ReviewScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen component={MovieScreen} name="MovieScreen" />
    </Stack.Navigator>
  );
};
export {RootNavigator};
