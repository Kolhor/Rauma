import React, { Component } from "react";
import { WebBrowser } from "expo";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
  Button,
  Dimensions
} from "react-native";
import Modal from "react-native-modal"; // 2.4.0
import { List, ListItem } from "react-native-elements";
import CustomHeader from "../components/CustomHeader";
import { Container, Header, Content } from "native-base";
const { width, height } = Dimensions.get("window");
class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      school: null,

      highSchools: [
        {
          name: "Rauma videregående skole",
          tlf: "tlf: 47662200",
          imageUrl: require("../assets/images/RVS.jpg"),
          url: "http://www.rauma.vgs.no/Rauma-VGS/Forsiden"
        }
      ],
      schools: [
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
        }
      ],
      other: [
        {
          name: "Rauma musikk- og kulturskole",
          tlf: "tlf: 71166105",
          imageUrl: require("../assets/images/raumaKulturhus.jpg"),
          url:
            "https://www.rauma.kommune.no/tjenester/kultur-idrett-og-fritid/fritid/rauma-musikk-og-kulturskole.61465.aspx"
        },
        {
          name: "Voksenopplæringssenteret",
          tlf: "tlf: 71166175",
          imageUrl: require("../assets/images/voksenopplæring.jpg"),
          url: "http://rauma.pedit.no/web/PageND.aspx?id=173717"
        }
      ]
    };
  }
  handlePressButtonAsync = async school => {
    this.setState({ school, modalVisible: !this.state.modalVisible });
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  /*
  handlePressButtonAsync = async itemUrl => {
    let result = await WebBrowser.openBrowserAsync(itemUrl);
    this.setState({ result });
  };
  */
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderModal = () => {
    if (this.state.school !== null) {
      return (
        <Modal
          style={styles.modalContent}
          transparent={true}
          animationType="slide"
          backdropOpacity={0.9}
          visible={this.state.modalVisible}
          onBackdropPress={() => this.setModalVisible(!this.state.modalVisible)}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ flex: 1, height: 50 }}>
            <Text style={{ fontSize: 20 }}>{this.state.school.name}</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <View style={styles.button}>
                <Text>Tilbake</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Modal>
      );
    }
    return;
  };

  renderSchoolList = () => {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          Barne- og ungdomsskole
        </Text>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.schools}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => this.handlePressButtonAsync(item)}
              >
                <ListItem
                  roundAvatar
                  title={item.name}
                  subtitle={item.tlf}
                  avatar={item.imageUrl}
                  containerStyle={{ borderBottomWidth: 0 }}
                />
              </TouchableHighlight>
            )}
          />
        </List>
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          Videregående skole
        </Text>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.highSchools}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => this.handlePressButtonAsync(item)}
              >
                <ListItem
                  roundAvatar
                  title={item.name}
                  subtitle={item.tlf}
                  avatar={item.imageUrl}
                  containerStyle={{ borderBottomWidth: 0 }}
                />
              </TouchableHighlight>
            )}
          />
        </List>
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          Musikk- og videreutdanning
        </Text>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.other}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => this.handlePressButtonAsync(item)}
              >
                <ListItem
                  roundAvatar
                  title={item.name}
                  subtitle={item.tlf}
                  avatar={item.imageUrl}
                  containerStyle={{ borderBottomWidth: 0 }}
                />
              </TouchableHighlight>
            )}
          />
        </List>
      </ScrollView>
    );
  };
  render() {
    let kindergardens = [];
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="Skole"
          openDrawer={() => this.props.navigation.openDrawer()}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>{this.renderSchoolList()}</View>
          <View>{this.renderModal()}</View>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "steelblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    flex: 1,
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
};
export default School;
