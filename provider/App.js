import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/stackNavigator';


export default function App() {
  return (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
  );
}

