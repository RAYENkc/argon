import { ProductItem } from "../app/3D/models/ProductItem/ProductItem";
import { getFlowerPotModel, getplateModel, getRoseModel } from "./Models";
import { Euler, Vector3 } from "three";
import { SelectedOptionsType } from "../app/3D/models/SelectableMeshesOptions/SelectedOptionsType";
import { MaterialAnimationType } from "../app/3D/MaterialAnimators/MaterialAnimationType";
import { SelectedSpecificTexturesValue } from "../app/3D/models/SelectableMeshesOptions/SelectedSpecificTexturesValue";

export function createFlowerPot(id: any): ProductItem {
  return {
    id,
    name: "flowerpot",
    thumbnail: "assets/models/thumbnail_pot.png",
    models: [ getFlowerPotModel() ],
    hasFloor: false,
    useGammaSpace: false,
    tooltip: "A very good looking flower pot.",
    subItems: [],
    selectableMeshesOptions: [
      {
        includedMeshes: ["Object_2"],
        options: {
          type: SelectedOptionsType.FreeColor,
        },
      }, 
      {
        includedMeshes: ["Object_3"],
        options: {
          type: SelectedOptionsType.SpecificColors,
          value: {
            animationType: MaterialAnimationType.Linear,
            // ffc0cb = CSS Color 'pink'
            colors: ["#ff7f00", "#badbad", "#ffc0cb"],
          },
        }
      }
    ],

    activeEvents: [],
  };
}

export function createRose(id: string): ProductItem {
  const rose1 = getRoseModel();

  const selectedOptionsValue: SelectedSpecificTexturesValue = {
    animationType: MaterialAnimationType.FromTopToBottom,
    textures: [
      {
        url: "assets/models/mug_1/textures/rayen.jpg",
        thumbnail: "assets/models/mug_1/textures/rayen.jpg",

      }, {
        url: "assets/models/mug_1/textures/Material.001_normal.png",
        thumbnail: "assets/models/mug_1/textures/Material.001_normal.png",
      },
      {
         url: "assets/models/mug_1/textures/wuffels.png",
        thumbnail: "assets/models/mug_1/textures/wuffels.png",
      },
      {
        url: "assets/models/mug_1/textures/Brick_Wall_017_normal.jpg",
       thumbnail: "assets/models/mug_1/textures/Brick_Wall_017_normal.jpg",
     },
      
    ],
  };

  return {
    id,
    name: "roses",
    thumbnail: "assets/models/mug_1.png",
    //, rose2, centerRose, rose4, rose5
    models: [ rose1 ],
    hasFloor: false,
    useGammaSpace: false,
    tooltip: "A special gift a long time ago.",
    subItems: [],
    selectableMeshesOptions: [
      // ilbara "Circle_Material002_0"
        // il dea5il mil kess "Circle001_Material001_0"
      {
        // ilbara "Circle_Material002_0"
        // il dea5il mil kess "Circle001_Material001_0"
      includedMeshes: ["Circle_Material002_0"],
      noSiblings: false,
      options: {
        type: SelectedOptionsType.SpecificTextures,
        value: selectedOptionsValue,
      },
      
    },
  /*  {
      includedMeshes: ["Circle_Material002_0"],
      options: {
        type: SelectedOptionsType.FreeColor,
      },
    }*/
  ],

    activeEvents: [],
  };
}

export function createWuffels(id: string): ProductItem {

  const plate = getplateModel();
  const selectedOptionsValue: SelectedSpecificTexturesValue = {
    animationType: MaterialAnimationType.FromTopToBottom,
    textures: [
      {
        url: "assets/models/plate/textures/rayen.jpg",
        thumbnail: "assets/models/plate/textures/rayen.jpg",

      }, {
        url: "assets/models/plate/textures/Material.001_normal.png",
        thumbnail: "assets/models/plate/textures/Material.001_normal.png",
      },
    ],
  };

  return {
    id,
    name: "Wuffels",
    thumbnail: "assets/models/plate.png",
    models: [ plate ],
    hasFloor: true,
    useGammaSpace: false,
    tooltip: "Wuffels! Wuff!",
    subItems: [],
    selectableMeshesOptions: [
    {
      includedMeshes: [ "Object_2"],
      noSiblings: false,
      options: {
        type: SelectedOptionsType.SpecificTextures,
        value: selectedOptionsValue,
      },
    }

   /* {
      includedMeshes: ["Object_4"],
      options: {
        type: SelectedOptionsType.FreeColor,
      },
    }*/
    ],

    activeEvents: [],
  };
}


