import React from "react";
import { Portal, FAB } from "react-native-paper";

export default class FabAdicionar extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <Portal>
        <FAB.Group
          open={this.state.open}
          icon={"navigation"}
          actions={[
            {
              icon: "plus",
              label: "Adicionar Alerta",
              onPress: () => console.log("Pressed adicionar alerta")
            }
          ]}
          onStateChange={({ open }) => this.setState({ open })}
          onPress={() => {
            if (this.state.open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    );
  }
}
