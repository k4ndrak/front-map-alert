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
        <UrlTile urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {this.props.alertsOpened.map(alert => (
          <Marker
            key={alert.id}
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
