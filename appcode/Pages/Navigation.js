import { createStackNavigator, createAppContainer } from 'react-navigation';
//import { Home } from './Home';
import { HomeComponent, FormComponent, CourseComponent } from '../Redux/Mappings/ComponentMappings';
import { Contacts } from './Contacts';
import { Reviews } from "../Pages/Reviews";

var AppNavigator = createStackNavigator({
  Home: {
    screen: HomeComponent, navigationOptions: () => ({
      title: 'Home page',
      headerStyle: {
        backgroundColor: '#f4511e',
      }
    })
  },
  Contacts: {
    screen: Contacts, navigationOptions: () => ({
      title: 'Contacts page',
      headerStyle: {
        backgroundColor: '#f4511e',
      }
    })
  },
  Form: {
    screen: FormComponent, navigationOptions: () => ({
      title: 'Form Page',
      headerStyle: {
        backgroundColor: '#f4511e'
      }
    })
  },
  Course: {
    screen: CourseComponent, navigationOptions: () => ({
      title: 'Course Page',
      headerStyle: {
        backgroundColor: '#f4511e'
      }
    })
  },
  Reviews: {
    screen: Reviews, navigationOptions: () => ({
      title: 'Reviews Page',
      headerStyle: {
        backgroundColor: '#f4511e'
      }
    })
  }
});

export default createAppContainer(AppNavigator);