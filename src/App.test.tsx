import { render } from "@testing-library/react";
import Statistics from "../src/solutionDesigner/containers/Statistics";

describe("Statistics", () => {
  test("renders the component", () => {
    render(<Statistics />);
  });

  test("displays warning message when less than 2 polygons are selected", () => {
    const { getByText } = render(<Statistics />);
    expect(getByText(/Select at least two polygons/)).toBeInTheDocument();
  });

  /* test('displays warning message when more than 2 polygons are selected', () => {
    const featureCollections: FeatureCollection = [
      {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: 1,
            geometry: { type: 'Polygon', coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]] },
            properties: { selected: true }
          },
          {
            type: 'Feature',
            id: 2,
            geometry: { type: 'Polygon', coordinates: [[[2, 0], [3, 0], [3, 1], [2, 1], [2, 0]]] },
            properties: { selected: true }
          },
          {
            type: 'Feature',
            id: 3,
            geometry: { type: 'Polygon', coordinates: [[[4, 0], [5, 0], [5, 1], [4, 1], [4, 0]]] },
            properties: { selected: true }
          }
        ]
      }
    ];
    const { getByText } = render(<Statistics featureCollections={featureCollections} featureIndex={0} />);
    expect(getByText(/Select maximum two polygons/)).toBeInTheDocument();
  });

  test('calculates and displays the area of a single selected polygon', () => {
    const featureCollections = [
      {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: 1,
            geometry: { type: 'Polygon', coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]] },
            properties: { selected: true }
          }
        ]
      }
    ];
    const { getByText } = render(<Statistics featureCollections={featureCollections} featureIndex={0} />);
    expect(getByText('1 m2')).toBeInTheDocument();
  });

  test('calculates and displays the area of the union of two selected polygons', () => {
    const featureCollections = [
      {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: 1,
            geometry: { type: 'Polygon', coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]] },
            properties: { selected: true }
          },
          {
            type: 'Feature',
            id: 2,
            geometry: { type: 'Polygon', coordinates: [[[2, 0], [3, 0], [3, 1], [2, 1], [2, 0]]] },
            properties: { selected: true }
          }
        ]
      }
    ];
    const { getByText } = render(<Statistics featureCollections={featureCollections} featureIndex={0} />);
    expect(getByText('2 m2')).toBeInTheDocument(); */
});
