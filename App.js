import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import {
	Activities,
	Culture,
	Fees,
	Health,
	Home,
	Nature,
	News,
	Politics,
	School,
	Transport,
	WorkLife
} from './screens';
import { Container, Content, Header, Body, Icon } from 'native-base';
export default class App extends React.Component {
	render() {
		return <MyApp />;
	}
}
const CustomDrawerContentComponent = props => (
	<Container>
		<Header
			style={{
				height: 200,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Body>
				<Image
					style={styles.drawerImage}
					source={require('./assets/rauma.png')}
				/>
			</Body>
		</Header>
		<Content>
			<DrawerItems {...props} />
		</Content>
	</Container>
);
const MyApp = DrawerNavigator(
	{
		Home: { screen: Home },
		Transport: { screen: Transport }
	},
	{
		initialRouteName: 'Home',
		contentComponent: CustomDrawerContentComponent,
		drawerOpenRoute: 'DrawerOpen',
		drawerCloseRoute: 'DrawerClose',
		drawerToggleRoute: 'DrawerToggle'
	}
);

/*render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Text onPress={this._handlePress}>HomeScreen!</Text>
			</View>
		);
	}

	_handlePress = () => {
		this.props.navigation.navigate('Home');
	};
}

export default StackNavigator({
	Home: {
		screen: HomeScreen
	}
});*/

styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	drawerImage: {
		alignSelf: 'center',
		height: 150,
		width: 121
	}
});
