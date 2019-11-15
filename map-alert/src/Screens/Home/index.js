import React from "react";

import MapProvider from "../../Components/MapContext";
import Map from "../../Components/Map";
import FabAdicionar from "../../Components/FabAdicionar";

const Home = () => {
  return (
    <MapProvider>
      <Map />
      <FabAdicionar />
    </MapProvider>
  );
};

export default Home;
