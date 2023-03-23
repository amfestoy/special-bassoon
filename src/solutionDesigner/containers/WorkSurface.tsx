import { Layer, Source, Map, FillLayer } from "react-map-gl";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";

import { useStore } from "../solutionDesignerStore";

const Wrapper = styled.div``;
const dataLayer: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": "#162d3f",
    "fill-opacity": [
      "case",
      ["boolean", ["feature-state", "hover"], false],
      1,
      0.5,
    ],
  },
};

const WorkSurface = () => {
  const { featureIndex, featureCollections, changeFeatureSet } = useStore();
  const featureCollection = featureCollections[featureIndex];

  /*
  // todo fix hover
  const mouseMove = (e: mapboxgl.MapLayerMouseEvent) => {
    let newFeatures = data.features;
    if (!e.features || e.features?.length === 0) return;

    // Reset the feature state for all previously hovered features
    newFeatures = newFeatures.map((feature) => {
      return { ...feature, properties: { hover: false } };
    });

    e.features.forEach((f) => {
      const id = f.id;
      console.log(id);
      if (!id) return;
      newFeatures[Number(id)] = {
        ...newFeatures[Number(id)],
        properties: { hover: true },
      };
    });
    changeFeatureSet(featureIndex, { ...data, features: newFeatures });
  }; */

  const onClick = (e: mapboxgl.MapLayerMouseEvent) => {
    if (!e.features || e.features?.length === 0) return;
    const selectedP = e.features.map((f) => Number(f.id) ?? 0);
    const newFeatureSet = { ...featureCollection };
    newFeatureSet.features = featureCollection.features.map((f) => {
      if (f.id === undefined) return f;
      const selected = selectedP.includes(f.id as number);
      return { ...f, properties: { ...f.properties, selected } };
    });
    changeFeatureSet(featureIndex, newFeatureSet);
  };

  return (
    <Wrapper>
      <Map
        onClick={onClick}
        initialViewState={{
          longitude: 2.2956061363220215,
          latitude: 48.854783383117244,
          zoom: 15,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={
          "pk.eyJ1IjoiYW1mZXN0b3kiLCJhIjoiY2xmYm03bTg1MHR0azNxbmd3NXZoZmJldiJ9.9w5tEuMwnuNKRmR-5ZdVew"
        }
        interactiveLayerIds={["data"]}
      >
        <Source type="geojson" data={featureCollection}>
          <Layer {...dataLayer} />
        </Source>
      </Map>
    </Wrapper>
  );
};

export default WorkSurface;
