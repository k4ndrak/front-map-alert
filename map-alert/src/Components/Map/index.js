import React from "react";
import styles from "./style";
import { ActivityIndicator, Text } from "react-native-paper";
import { View, Platform } from "react-native";
import MapView, { Marker, UrlTile, MAP_TYPES } from "react-native-maps";

export default class Map extends React.Component {
  render() {
    const region = this.props.currentLocation;

    if (!region) {
      return (
        <View style={styles.loadingMap}>
          <ActivityIndicator animating={true} size="large" />
          <Text>Carregando mapa</Text>
        </View>
      );
    }

    return (
      <MapView
        style={styles.map}
        region={region}
        provider={null}
        mapType={Platform.OS == "android" ? MAP_TYPES.NONE : MAP_TYPES.STANDARD}
        rotateEnabled={false}
        showsUserLocation
      >
        <UrlTile
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={22}
        />

        {this.props.alertsOpened.map(alert => (
          <Marker
            key={alert.id}
            image={require("../../../assets/pin-64.png")}
            coordinate={{
              latitude: alert.latitude,
              longitude: alert.longitude
            }}
            title={alert.descricao}
          />
        ))}
      </MapView>
    );
  }
}
