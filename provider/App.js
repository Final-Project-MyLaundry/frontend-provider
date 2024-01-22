import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/stackNavigator';
import { AuthComponent } from './context/loginContext';


export default function App() {
  return (
    <AuthComponent>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
    </AuthComponent>
  );
}

