import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import CustomHeader from '../components/CustomHeader';

import { Container, Header, Content } from 'native-base';

class Home extends Component {
	/*static navigationOptions = {
    drawerIcon:(
      <Image source={require('../assets/')}
    )
  }*/

	async loadWebsite() {
		const searchUrl = `https://www.rauma.kommune.no`;
		const response = await fetch(searchUrl); // fetch page

		const htmlString = await response.text(); // get response text
		console.log(htmlString);
	}

	render() {
		return (
			<Container>
				<CustomHeader
					title="Hjem"
					drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
				/>

				<Content
					contentContainerStyle={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Text>Home Screen</Text>
					<Button title="hei" onPress={() => this.loadWebsite()} />
				</Content>
			</Container>
		);
	}
}

export default Home;
