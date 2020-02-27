import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ComplexColorScreen from './src/screens/ComplexColorScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import FlexBoxScreen from './src/screens/FlexBoxScreen';
import PositionExerciceScreen from './src/screens/PoisitionExerciceScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    ComplexColor: ComplexColorScreen,
    Color: ColorScreen,
    Text: TextScreen,
    Box: BoxScreen,
    FlexBox: FlexBoxScreen,
    PositionExercice: PositionExerciceScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
