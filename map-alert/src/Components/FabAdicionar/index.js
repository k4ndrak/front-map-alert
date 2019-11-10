import React from "react";
import { Portal, FAB } from "react-native-paper";
import { MapContext } from "../MapContext";

const FabAdicionar = () => {
  return (
    <MapContext.Consumer>
      {mapContext => (
        <Portal>
          <FAB.Group
            open={mapContext.fabOpen}
            icon={"navigation"}
            actions={[
              {
                icon: "plus",
                label: "Adicionar Alerta",
                onPress: mapContext._showModal
              }
            ]}
            onStateChange={mapContext._changeFab}
          />
        </Portal>
      )}
    </MapContext.Consumer>
  );
};

export default FabAdicionar;
