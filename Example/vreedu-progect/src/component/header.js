import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Linking,
  Alert
} from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";

export default class Header extends React.Component {
      
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>
            <Entypo name="phone" size={15} color="#fff" /> 010-2992-9736
          </Text>
          <Text style={styles.headerText}>
            <Entypo name="clock" size={15} color="#fff" /> Mon-Sat: 8:00 - 17:00
          </Text>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>
            <MaterialIcons name="email" size={15} color="#fff" />
            esketch@gmail.com
          </Text>
          <View style={styles.iconView}>
            <Entypo
              name="facebook-with-circle"
              size={20}
              color="#fff"
              onPress={() => {
                Linking.openURL('https://www.facebook.com/Vreedu-1527313873997437')
              }}
            />
            <Entypo
              name="twitter-with-circle"
              size={20}
              color="#fff"
              onPress={() => {
                Alert.alert("준비중입니다.")
              }}
            />
            <Entypo
              name="instagram-with-circle"
              size={20}
              color="#fff"
              onPress={() => {
                Alert.alert("준비중입니다.")
              }}
            />
          </View>
        </View>

        <View style={styles.headerTitleView}>
          <Image
            style={styles.titleLogo}
            source={require("../images/vreedu_logo.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    backgroundColor: "#39313C"
  },
  headerTextView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  headerText: {
    flex: 1,
    color: "#fff",
    textAlign: "justify",
    fontSize: 15
  },
  headerTitleView: {
    flex: 2,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  titleLogo: {
    flex: 1,
    resizeMode: "contain",
  },
  iconView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  list: {
    marginRight: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5
  }
});
