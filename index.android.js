import React from 'react';
import { AppRegistry, Navigator } from 'react-native';
import MenuScreen from './app/src/screens/MenuScreen';
import ServicesScreen from './app/src/screens/ServicesScreen';
import ServiceDataScreen from './app/src/screens/ServiceDataScreen';
import PaymentScreen from './app/src/screens/PaymentScreen';

class App extends React.Component {

	render() {
		return (
			<Navigator
				configureScene={ () => this.configureScene() }
				style={{ flex:1}}
				initialRoute={{id: 'menu'}}
				renderScene={this.renderScene}
				/>
			);
	}

	configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

	renderScene(route, navigator) {
		_navigator = navigator;
		switch (route.id) {
			case 'menu':
				return (<MenuScreen navigator={_navigator} title="menu"/>);
			case 'services':
				return (<ServicesScreen navigator={_navigator} title="services" passProps={route.passProps}/>);
			case 'service_data':
				return (<ServiceDataScreen navigator={_navigator} title="service_data" passProps={route.passProps}/>);
			case 'payment':
				return (<PaymentScreen navigator={_navigator} title="payment" passProps={route.passProps}/>);
		  default:
			  return (<MenuScreen navigator={_navigator} title="menu"/>);
		}
	}

}

AppRegistry.registerComponent('NewTest', () => App);
