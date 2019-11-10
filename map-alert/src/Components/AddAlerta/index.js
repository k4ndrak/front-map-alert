import React from "react";
import { Modal, Portal, Text } from "react-native-paper";

import { MapContext } from "../MapContext";

const AddAlerta = () => {
  return (
    <MapContext.Consumer>
      {mapContext => (
        <Portal>
          <Modal
            visible={mapContext.modalVisible}
            onDismiss={mapContext._hideModal}
          >
            <Text>Example Modal</Text>
          </Modal>
        </Portal>
      )}
    </MapContext.Consumer>
  );
};

export default AddAlerta;
