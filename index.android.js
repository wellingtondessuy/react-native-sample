import React from 'react';
import { AppRegistry, Navigator, StyleSheet, BackAndroid } from 'react-native';
import { Button, Title, Icon, Text, View } from 'native-base';
import LoginScreen from './app/src/screens/LoginScreen';
import MenuScreen from './app/src/screens/MenuScreen';
import ServicesScreen from './app/src/screens/ServicesScreen';
import ServiceDataScreen from './app/src/screens/ServiceDataScreen';
import PaymentScreen from './app/src/screens/PaymentScreen';

var back = function(route, navigator) {
	switch (route.id) {

		case 'payment':
			navigator.jumpBack(0);
			break;

		default:
			navigator.pop();

	}
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hiddenNavigationBar: true
		}
	}

	render() {
		return (
			<Navigator
				configureScene={ () => this.configureScene() }
				style={{ flex:1 }}
				initialRoute={{id: 'login'}}
				renderScene={this.renderScene}
				navigationBar={ this._navigationBar()}
			/>
		);
	}

	_navigationBar() {
		return (
			<Navigator.NavigationBar
			routeMapper={
				this._navigationBarRouter()
			}
			style={{backgroundColor: 'gray'}}
			/>
		);
	}

	_navigationBarRouter() {
		return {
			LeftButton (route, navigator, index, navState){
				if (index > 0) {
						return (
							<View style={styles.navBarLeft}>
								<Button transparent
									onPress={ () => back(route, navigator) }
								>
									<Icon name='ios-arrow-back' />
								</Button>
							</View>
						);
				}
				return null;
			},
			RightButton (route, navigator, index, navState){
				return null;
			},
			Title (route, navigator, index, navState){
				return (
					<View style={styles.navBarTitle}>
						<Title style={styles.navBarTitleText}>
							S2Payment
						</Title>
					</View>
				);
			}
		};
	}

	configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

	renderScene(route, navigator) {
		switch (route.id) {
			case 'login':
				return (<LoginScreen navigator={navigator} navigationBarHidden="true" title="login"/>);
			case 'menu':
				return (<MenuScreen navigator={navigator} title="menu"/>);
			case 'services':
				return (<ServicesScreen navigator={navigator}  title="services" passProps={route.passProps}/>);
			case 'service_data':
				return (<ServiceDataScreen navigator={navigator} title="service_data" passProps={route.passProps}/>);
			case 'payment':
				return (<PaymentScreen navigator={navigator} title="payment" passProps={route.passProps}/>);
		  default:
			  return (<MenuScreen navigator={navigator} title="menu"/>);
		}
	}

}

const styles = StyleSheet.create({
	navBarLeft: {
    paddingTop: 7,
		paddingLeft: 12
  },
	navBarTitle: {
    paddingTop: 11,
		paddingLeft: 8
  },
	navBarTitleText: {
    fontSize: 22,
		height: 35
  },
});

AppRegistry.registerComponent('NewTest', () => App);
