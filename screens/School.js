import React, { Component } from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { List, ListItem } from "react-native-elements";
import CustomHeader from "../components/CustomHeader";

import { Container, Header, Content } from "native-base";
class School extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let schools = [
      {
        name: "Innfjorden friskole SA, trinn 1-7",
        tlf: "tlf: 71166080",
        imageUrl: require("../assets/images/InnfjordenSkule.jpg"),
        url: "https://www.innfjorden.no/"
      },
      {
        name: "Isfjorden skole, trinn 1-7",
        tlf: "tlf: 71166110",
        imageUrl: require("../assets/images/isfjorden.png"),
        url: "http://rauma.pedit.no/web/PageND.aspx?id=137711"
      },
      {
        name: "Måndalen skule, trinn 1-10",
        tlf: "tlf: 71166200",
        imageUrl: require("../assets/images/måndalen.jpg"),
        url: "http://rauma.pedit.no/web/PageND.aspx?id=133634"
      },
      {
        name: "Vågstranda skule, trinn 1-7",
        tlf: "tlf: 71166250",
        imageUrl: require("../assets/images/vågstrandaSkule.jpg"),
        url: "http://rauma.pedit.no/web/PageND.aspx?id=133336"
      },
      {
        name: "Åfarnes skole, trinn 1-10",
        tlf: "tlf: 71166150",
        imageUrl: require("../assets/images/åfarnesSkole.jpg"),
        url: "http://rauma.pedit.no/web/PageND.aspx?id=131549"
      },
      {
        name: "Åndalsnes barneskole, trinn 1-7",
        tlf: "tlf: 71166010",
        imageUrl: require("../assets/images/åndalsnesBarneskole.jpg"),
        url: "http://rauma.pedit.no/web/PageND.aspx?id=128859"
      },
      {
        name: "Åndalsnes ungdomsskole, trinn 8-10",
        tlf: "tlf: 71166050",
        imageUrl: require("../assets/images/åus.jpg"),
        url: "http://rauma.pedit.no/web/PageND.aspx?id=124221"
      },
      {
        name: "Rauma musikk- og kulturskole",
        tlf: "tlf: 71166105",
        imageUrl: require("../assets/images/raumaKulturhus.jpg"),
        url:
          "https://www.rauma.kommune.no/tjenester/kultur-idrett-og-fritid/fritid/rauma-musikk-og-kulturskole.61465.aspx"
      },
      {
        name: "Rauma videregående skole",
        tlf: "tlf: 47662200",
        imageUrl: require("../assets/images/RVS.jpg"),
        url: "http://www.rauma.vgs.no/Rauma-VGS/Forsiden"
      },
      {
        name: "Voksenopplæringssenteret",
        tlf: "tlf: 71166175",
        imageUrl: require("../assets/images/voksenopplæring.jpg"),
        url: "http://rauma.pedit.no/web/PageND.aspx?id=173717"
      }
    ];
    return (
      <Container>
        <CustomHeader title="Skole" openDrawer={() => this.props.navigation.openDrawer()} />

        <List>
          <FlatList
            data={schools}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <ListItem roundAvatar title={item.name} subtitle={item.tlf} avatar={item.imageUrl} />
            )}
          />
        </List>
      </Container>
    );
  }
}
export default School;
