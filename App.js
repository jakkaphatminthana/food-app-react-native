import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/search_screen";
import ResultShowScreen from "./src/screens/result_show_screen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);