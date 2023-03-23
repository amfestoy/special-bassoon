import styled from "styled-components";
import { Feature, intersect, Polygon, union, area } from "@turf/turf";
import { Geometry } from "geojson";

import { useStore } from "../solutionDesignerStore";
import { Button, MenuWrapper } from "../../shared/components";

const ButtonList = styled.ul`
  all: unset;
  li {
    all: unset;
  }
`;

const Header = styled.h2`
  text-align: left;
  padding-left: 16px;
  margin-bottom: 16px;
`;

const Warning = styled.p`
  padding: 0 16px;
  text-align: left;
`;

const AreaInformation = styled.p`
  padding-right: 32px;
  text-align: right;
`;

const Statistics = () => {
  const {
    featureIndex,
    featureCollections,
    changeFeatureSet,
    resetFeatureCollection,
  } = useStore();
  const featureCollection = featureCollections[featureIndex];
  const selectedPolygons = featureCollection.features.filter(
    (f) => f.properties?.selected
  );

  const areaPolygons = area(featureCollection);
  const unionPolygons = () => {
    if (selectedPolygons.length !== 2) return;
    const unifiedPolygon =
      union(
        selectedPolygons[0] as Feature<Polygon>,
        selectedPolygons[1] as Feature<Polygon>
      ) ?? {};
    const newFeatureSet = { ...featureCollection };
    newFeatureSet.features = [unifiedPolygon as Feature<Geometry>];
    changeFeatureSet(featureIndex, newFeatureSet);
  };

  const intersectPolygons = () => {
    if (selectedPolygons.length !== 2) return;
    const uniFiedPolygon =
      intersect(
        selectedPolygons[0] as Feature<Polygon>,
        selectedPolygons[1] as Feature<Polygon>
      ) ?? {};
    const newFeatureSet = { ...featureCollection };
    newFeatureSet.features = [uniFiedPolygon as Feature<Geometry>];
    changeFeatureSet(featureIndex, newFeatureSet);
  };

  const reset = () => {
    resetFeatureCollection(featureIndex);
  };
  return (
    <MenuWrapper>
      <Header>Selected polygons</Header>
      <ButtonList>
        {selectedPolygons.map((sp) => (
          <li>{sp.id}</li>
        ))}
      </ButtonList>
      {selectedPolygons.length < 2 && (
        <Warning>
          Select at least two polygons to apply an action to them
        </Warning>
      )}
      {selectedPolygons.length > 2 && (
        <Warning>
          Select maximum two polygons to apply an action to them
        </Warning>
      )}
      <Header>Actions</Header>
      <ButtonList>
        <li>
          <Button onClick={unionPolygons}>Union</Button>
        </li>
        <li>
          <Button onClick={intersectPolygons}>Intersect</Button>
        </li>
        <li>
          <Button onClick={reset}>Reset</Button>
        </li>
      </ButtonList>
      <Header>Area of polygons</Header>
      <AreaInformation>
        {Math.round(areaPolygons).toLocaleString()} m2
      </AreaInformation>
    </MenuWrapper>
  );
};

export default Statistics;
