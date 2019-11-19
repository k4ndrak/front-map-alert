import React from "react";
import styles from "./style";
import { Platform } from "react-native";
import MapView, { Marker, UrlTile, MAP_TYPES } from "react-native-maps";
import { connect } from 'react-redux';


class Map extends React.Component {
  render() {
    const region = this.props.currentLocation;
    const { alerts } = this.props;
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

        {alerts.map(alert => (
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

const mapStateToProps = store => ({
  alerts: store.alerts
});

export default connect(mapStateToProps)(Map);