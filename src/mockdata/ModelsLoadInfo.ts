import { MaterialInfo } from "../app/3D/models/MaterialInfo";

export interface Model3DLoadInfo {
  filename: string;
  materialInfo: MaterialInfo;
}

export const flowerPotModelLoadInfo: Model3DLoadInfo = {
  filename: "assets/models/cup.obj",
  materialInfo: {
    mtl: "assets/models/flowerpot.mtl",
    renderBackface: true
  },
};

export const roseModelLoadInfo: Model3DLoadInfo = {
  filename: "assets/models/mug_1/scene.gltf",
  materialInfo: {
    diffuseTexture: "assets/models/mug_1/textures/rayen.jpg",
    normalTexture: "assets/models/mug_1/textures/Material.001_normal.png",
    renderBackface: true
  },
};

export const plateModelLoadInfo: Model3DLoadInfo = {
 filename: "assets/models/angel_plate_hand_painted_by_caroline_harrison/scene.gltf",
  materialInfo: {
   /* diffuseTexture: "assets/models/plate/textures/rayen.jpg",
    normalTexture: "assets/models/plate/textures/Material.001_normal.png",*/
    renderBackface: true
  },
};

export const wayfairChairModelLoadInfo: Model3DLoadInfo = {
  filename: "assets/models/floral_plate/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};

export const wayfairTableModelLoadInfo: Model3DLoadInfo = {
  //assets/models/no12_-_cake_cupcake/scene.gltf
  filename: "assets/models/bucket_hat/scene.gltf",
  materialInfo: {
   
    renderBackface: false
  },
};

export const ikeaChearModelLoadInfo: Model3DLoadInfo = {
  filename: "assets/models/putzki_plate/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};

export const ikeaTableModelLoadInfo: Model3DLoadInfo = {
  filename: "assets/models/a_gift_box/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};

export const ikeaTableModelLoadInfo1: Model3DLoadInfo = {
  filename: "assets/models/pbr/IKEA_table.gltf",
  materialInfo: {
    renderBackface: false
  },
};


export const ikeaBucketHatModelLoadInfo: Model3DLoadInfo = {
  filename: "assets/models/bucket_hat/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};

export const day3CakeModelLoadInfo: Model3DLoadInfo = {
  filename: "assets/models/day_3_cake/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};

export const getDoubleChocolateCakeWithSprinklesLoadInfo : Model3DLoadInfo = {
  filename: "assets/models/double_chocolate_cake_with_sprinkles/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};

export const CupCake1LoadInfo : Model3DLoadInfo = {
  filename: "assets/models/free_to_download_handpainted_stylized_cupcake/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};

export const mugLoadInfo : Model3DLoadInfo = {
  filename: "assets/models/mug/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};


export const PopCornBucketLoadInfo : Model3DLoadInfo = {
  filename: "assets/models/popcorn_bucket/scene.gltf",
  materialInfo: {
    renderBackface: false
  },
};