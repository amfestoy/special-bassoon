import { create } from "zustand";
import { FeatureCollection } from "geojson";
import FeatureCollections from "./files";

const applyFeatureProperties = (data: FeatureCollection) => {
  const newFC = { ...data };
  newFC.features = newFC.features.map((f, i) => ({
    ...f,
    id: i,
    properties: { hover: true, selected: false },
  }));
  return newFC;
};

const INITIAL_FEATURE_COLLECTIONS = FeatureCollections.map((d) =>
  applyFeatureProperties(d as FeatureCollection)
);

export interface AppState {
  featureIndex: number;
  featureCollections: FeatureCollection[];
  changeFeatureIndex: (index: number) => void;
  resetFeatureCollection: (index: number) => void;
  changeFeatureSet: (
    featureIndex: number,
    featureSet: FeatureCollection
  ) => void;
}

const INITIAL_STATE = {
  featureIndex: 0,
  featureCollections: INITIAL_FEATURE_COLLECTIONS,
};

export const useStore = create<AppState>((set) => ({
  ...INITIAL_STATE,
  changeFeatureIndex: (index: number) => {
    set(() => ({
      featureIndex: index,
    }));
  },
  changeFeatureSet: (
    featureSetIndex: number,
    featureSet: FeatureCollection
  ) => {
    set((state) => {
      const newFS = state.featureCollections.map((fs, i) =>
        i === featureSetIndex ? featureSet : fs
      );
      return { featureCollections: newFS };
    });
  },
  resetFeatureCollection: (featureSetIndex: number) => {
    set((state) => {
      const newFS = state.featureCollections.map((fs, i) =>
        i === featureSetIndex
          ? INITIAL_FEATURE_COLLECTIONS[featureSetIndex]
          : fs
      );
      return { featureCollections: newFS };
    });
  },
}));
