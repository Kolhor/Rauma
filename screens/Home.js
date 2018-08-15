import React, { Component } from "react";
const cheerio = require("react-native-cheerio");
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import CustomHeader from "../components/CustomHeader";

import { Container, Header, Content } from "native-base";

class Home extends Component {
  render() {
    return (
      <Container>
        <CustomHeader title="Hjem" openDrawer={() => this.props.navigation.openDrawer()} />
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Home Screen</Text>
        </Content>
      </Container>
    );
  }
}

/*  async loadWebsite() {
    console.log("loadWebsite");
    const searchUrl = `https://www.rauma.kommune.no`;
    const response = await fetch(searchUrl); // fetch page

    const htmlString = await response.text(); // get response text
    console.log("loaded website");
    this.loadCheerio(htmlString);
  }

  loadCheerio = async htmlString => {
    console.log("loadCheerio");
    const $ = await cheerio.load(htmlString);
    let akt = [];
    let aktuelt = [$(
      "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl01_HyperLink1"
    ),];
}

render() {
  let content =
    this.state.aktuelt !== null ? (
      <Text>{this.state.aktuelt}</Text>
    ) : (
      <Button title="hei" onPress={() => this.loadWebsite()} />
    );
  console.log("oppdatert");
  return (
    <Container>
      <CustomHeader title="Hjem" drawerOpen={() => this.props.navigation.navigate("DrawerOpen")} />

      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Home Screen</Text>
        <ScrollView>{content}</ScrollView>
      </Content>
    </Container>
  );
}*/

/*  constructor(props) { //Dette er for forsiden på rauma kommune
    super(props);
    this.state = { aktuelt: null };
  }
  async loadWebsite() {
    console.log("loadWebsite");
    const searchUrl = `https://www.rauma.kommune.no`;
    const response = await fetch(searchUrl); // fetch page

    const htmlString = await response.text(); // get response text
    console.log("loaded website");
    this.loadCheerio(htmlString);
  }

  loadCheerio = async htmlString => {
    console.log("loadCheerio");
    const $ = await cheerio.load(htmlString);
    let akt = [];
    let aktuelt = [
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl01_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl02_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl03_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl04_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl05_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl06_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl07_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl08_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl09_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl10_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl11_HyperLink1"
      ),
      $(
        "#ctl00_ctl00_ctl00_innhold_MidtSone_ctl01_FrontLayoutListeId_176_FrontLayoutListeId_176_sisteArtiklerListe_ctl12_HyperLink1"
      )
    ];

    let akt1 = aktuelt[0].text();
    let akt2 = aktuelt[1].text();
    let akt3 = aktuelt[2].text();
    let akt4 = aktuelt[3].text();
    let akt5 = aktuelt[4].text();
    let akt6 = aktuelt[5].text();
    let akt7 = aktuelt[6].text();
    let akt8 = aktuelt[7].text();
    let akt9 = aktuelt[8].text();
    let akt10 = aktuelt[9].text();
    let akt11 = aktuelt[10].text();
    let akt12 = aktuelt[11].text();
    akt.push(akt1, akt2, akt3, akt4, akt5, akt6, akt7, akt8, akt9, akt10, akt11, akt12);
    this.setState({ aktuelt: akt });
  };
}
*/
export default Home;
