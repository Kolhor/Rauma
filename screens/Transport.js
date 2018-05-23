import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../components/CustomHeader';

import { Container, Header, Content } from 'native-base';
class Transport extends Component {
	render() {
		return (
			<Container>
				<CustomHeader
					title="Transport"
					drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
				/>
				<Content
					contentContainerStyle={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Text>Transport</Text>
				</Content>
			</Container>
		);
	}
}

export default Transport;
