import React from "react";

export const MapContext = React.createContext();

class MapProvider extends React.Component {
  constructor(props) {
    super(props);

    this._getCurrentLocation = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        return console.log("Permissão negada!");
      }

      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync({});
      this.setState({
        region: {
          latitude,
          longitude,
          latitudeDelta: 0.0922 / 30,
          longitudeDelta: 0.0421 / 30
        }
      });
    };

    this._handlerDescriptionText = () => {
      this.setState({ descriptionText });
    };

    this.state = {
      region: null,
      _getCurrentLocation: this._getCurrentLocation,
      descriptionText: "",
      _handlerDescriptionText: this._handlerDescriptionText
    };
  }

  render() {
    return (
      <MapContext.Provider value={this.state}>
        {this.props.children}
      </MapContext.Provider>
    );
  }
}

export default MapProvider;
