import React from "react";
import { Portal, FAB } from "react-native-paper";

export default class FabAdicionar extends React.Component {
  state = {
    fabOpen: false
  };

  render() {
    return (
      <Portal>
        <FAB.Group
          open={this.state.fabOpen}
          icon={"map-marker"}
          actions={[
            {
              icon: "plus",
              label: "Adicionar Alerta",
              onPress: console.log("nvdkls")
            }
          ]}
          onStateChange={({ open }) => this.setState({ fabOpen: open })}
        />
      </Portal>
    );
  }
}
