import React, { Component } from "react";
import {
  Navigator,
  NativeModules,
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid
} from "react-native";

import { COLOR, ThemeProvider } from "react-native-material-ui";
import {
  Toolbar,
  Drawer,
  Avatar,
  Badge,
  IconToggle
} from "react-native-material-ui";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
    this.refs["DRAWER_REF"].openDrawer();
    //alert("Hiiii");
  }

  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
          I'm in the Drawer!
        </Text>
      </View>
    );
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <DrawerLayoutAndroid
          drawerWidth={240}
          ref={"DRAWER_REF"}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
        >
          <Toolbar
            leftElement={
              <IconToggle
                name="menu"
                color="#ffffff"
                onPress={this.openDrawer.bind(this)}
              />
            }
            centerElement="Searchable"
            isSearchActive={false}
            searchable={{
              autoFocus: true,
              placeholder: "Search"
            }}
          />
        </DrawerLayoutAndroid>
      </ThemeProvider>
    );
  }
}

const uiTheme = {
  palette: {
    primaryColor: COLOR.blueGrey900
  },
  toolbar: {
    container: {
      height: 50
    }
  }
};
