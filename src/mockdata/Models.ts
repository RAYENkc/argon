import { Model3D } from "../app/3D/models/Model3D";
import {
  CupCake1LoadInfo,
  day3CakeModelLoadInfo,
  flowerPotModelLoadInfo, getDoubleChocolateCakeWithSprinklesLoadInfo, ikeaBucketHatModelLoadInfo, ikeaChearModelLoadInfo, ikeaTableModelLoadInfo,
  ikeaTableModelLoadInfo1,
  mugLoadInfo,
  plateModelLoadInfo,
  PopCornBucketLoadInfo,
  roseModelLoadInfo,
  wayfairChairModelLoadInfo, wayfairTableModelLoadInfo,
  
} from "./ModelsLoadInfo";

export const getFlowerPotModel: () => Model3D = () => {
  return { ...flowerPotModelLoadInfo };
};

export const getRoseModel: () => Model3D = () => {
  return { ...roseModelLoadInfo };
};

export const getplateModel: () => Model3D = () => {
  return { ...plateModelLoadInfo };
};

export const getWayfairChairModel: () => Model3D = () => {
  return { ...wayfairChairModelLoadInfo };
};

export const getWayfairTableModel: () => Model3D = () => {
  return { ...wayfairTableModelLoadInfo };
};

export const getIkeaChearModel: () => Model3D = () => {
  return { ...ikeaChearModelLoadInfo };
};

export const getIkeaTableModel: () => Model3D = () => {
  return { ...ikeaTableModelLoadInfo };
};

export const getIkeaTableModel1: () => Model3D = () => {
  return { ...ikeaTableModelLoadInfo1 };
};

export const getIkeaBucketHatModel: () => Model3D = () => {
  return { ...ikeaBucketHatModelLoadInfo };
};

export const getDay3Cake: () => Model3D = () => {
  return { ...day3CakeModelLoadInfo };
};


export const getDoubleChocolateCakeWithSprinkles: () => Model3D = () => {
  return { ...getDoubleChocolateCakeWithSprinklesLoadInfo };
};

export const getCupCake1: () => Model3D = () => {
  return { ...CupCake1LoadInfo };
};

export const getmug: () => Model3D = () => {
  return { ...mugLoadInfo };
};

export const getPopCornBucket: () => Model3D = () => {
  return { ...PopCornBucketLoadInfo };
};