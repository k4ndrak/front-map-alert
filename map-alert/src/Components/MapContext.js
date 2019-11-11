import React from "react";

export const MapContext = React.createContext();

class MapProvider extends React.Component {
  constructor(props) {
    super(props);

    this._showModal = () => this.setState({ modalVisible: true });
    this._hideModal = () => this.setState({ modalVisible: false });
    this._changeFab = ({ open }) => this.setState({ fabOpen: open });

    this.state = {
      fabOpen: false,
      modalVisible: false,
      _showModal: this._showModal,
      _hideModal: this._hideModal,
      _changeFab: this._changeFab
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
