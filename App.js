import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlightSearch from './src/component/FlightSearch';
import FlightResult from './src/component/FlightResult';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FlightSearch} options={{ headerShown: false }}/>
        <Stack.Screen name="ResultFlight" component={FlightResult} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;