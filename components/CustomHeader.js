import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title } from "native-base";

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Laster inn Rauma-appen</Text>
        </View>
      );
    }
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default CustomHeader;
