import { ProductItem } from "../app/3D/models/ProductItem/ProductItem";
import { getCupCake1, getDay3Cake, getDoubleChocolateCakeWithSprinkles, getIkeaBucketHatModel, getIkeaChearModel, getIkeaTableModel, getIkeaTableModel1, getmug, getPopCornBucket, getWayfairChairModel, getWayfairTableModel } from "./Models";
import { ProductConfigurationEvent } from "../app/product-configurator-events";
import { MaterialAnimationType } from "../app/3D/MaterialAnimators/MaterialAnimationType";
import { SelectedOptionsType } from "../app/3D/models/SelectableMeshesOptions/SelectedOptionsType";
import { SelectedSpecificTexturesValue } from "src/app/3D/models/SelectableMeshesOptions/SelectedSpecificTexturesValue";

export function createWayfairTable(id: number): ProductItem {
  const hat = getWayfairTableModel() ;
  const selectedOptionsValue: SelectedSpecificTexturesValue = {
    animationType: MaterialAnimationType.FromTopToBottom,
    textures: [
      {
        url: "assets/models/bucket_hat/textures/Cubo_normal.png",
        thumbnail: "assets/models/bucket_hat/textures/Cubo_normal.png",

      }, {
        url: "assets/models/plate/textures/Material.001_normal.png",
        thumbnail: "assets/models/plate/textures/Material.001_normal.png",
      },
    ],
  };
  return {
    id,
    name: "table1",
    thumbnail: "assets/models/no12_-_cake_cupcake.png",
    models: [hat],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A table.",
    subItems: [],
    selectableMeshesOptions: [
     /* {
          // "Object_2" , "Object_3" ,
   
        includedMeshes: [ "Object_5"],
        noSiblings: false,
        options: {
          type: SelectedOptionsType.SpecificTextures,
          value: selectedOptionsValue,
        },
      }
  
   */
      
      {
        includedMeshes: ["Object_5"],
        options: {
          type: SelectedOptionsType.FreeColor,
        },
      }
      ],

    activeEvents: [],
  };
}

export function createWayfairChair(id: number): ProductItem {

  const selectedOptionsValue: SelectedSpecificTexturesValue = {
    animationType: MaterialAnimationType.FromTopToBottom,
    textures: [
      {
        url: "assets/models/bucket_hat/textures/Cubo_normal.png",
        thumbnail: "assets/models/bucket_hat/textures/Cubo_normal.png",

      }, {
        url: "assets/models/plate/textures/Material.001_normal.png",
        thumbnail: "assets/models/plate/textures/Material.001_normal.png",
      },
    ],
  };

  return {
    id,
    name: "chair",
    thumbnail: "assets/models/floral_plate/floral_plate.png",
    models: [ getWayfairChairModel() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A hard chair.",
    subItems: [],
    selectableMeshesOptions: [
     {
          // "Object_2" , "Object_3" ,
   
        includedMeshes: [ "Object_5"],
        noSiblings: false,
        options: {
          type: SelectedOptionsType.SpecificTextures,
          value: selectedOptionsValue,
        },
      },
  
/*
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
      },
      {
        includedMeshes: ["Object_4"],
        options: {
         type: SelectedOptionsType.FreeColor,
       },
      },
      {
        includedMeshes: ["Object_6"],
        options: {
         type: SelectedOptionsType.FreeColor,
       },
      },
        {
           includedMeshes: ["Object_5"],
           options: {
            type: SelectedOptionsType.FreeColor,
          },
         },
         
        {
          includedMeshes: ["Object_5"],
          options: {
           type: SelectedOptionsType.FreeColor,
         },
        }*/
        ],
       activeEvents: [],
      };
    }



// That typo... well it's fun to keep using it for this little example
export function createIkeaChear(id: number): ProductItem {

  const selectedOptionsValue: SelectedSpecificTexturesValue = {
    animationType: MaterialAnimationType.FromTopToBottom,
    textures: [
      {
        url: "assets/models/bucket_hat/textures/Cubo_normal.png",
        thumbnail: "assets/models/bucket_hat/textures/Cubo_normal.png",

      }, {
        url: "assets/models/plate/textures/Material.001_normal.png",
        thumbnail: "assets/models/plate/textures/Material.001_normal.png",
      },
    ],
  };



  const ikeaChearProduct: ProductItem = {
    id,
    name: "chear",
    thumbnail: "assets/models/plate.png",
    models: [ getIkeaChearModel() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "Putzki Plate",
    subItems: [],
    selectedSubItem: null,
    selectableMeshesOptions: [
    /*  {
          
    
         includedMeshes: [ "Object_3"],
         noSiblings: false,
         options: {
           type: SelectedOptionsType.SpecificTextures,
           value: selectedOptionsValue,
         },
       },*/

       {
        includedMeshes: ["Object_5"],
        options: {
         type: SelectedOptionsType.FreeColor,
       },
      },
    ],
    activeEvents: [],
  };

  const chearSubItems = ikeaChearProduct.subItems;

  chearSubItems.push({
    id: chearSubItems.length,
    // TODO: Change this into using a thumbnail.
    // 1024x1024 image scaled to ~32x32px :D - them loading times too!
    image: "assets/models/pbr/chair_mat_baseColor.png",
    eventType: ProductConfigurationEvent.Material_TextureSwap,
    tooltip: "White chair",
    data: {
      addGlobalLoadingEvent: true,
      animationType: MaterialAnimationType.FromTopToBottom,
      productItem: ikeaChearProduct,
      textureSlot: "map",
      textureUrl: "assets/models/pbr/chair_mat_baseColor.png",
    }
  });
  chearSubItems.push({
    id: chearSubItems.length,
    // TODO: Change this into using a thumbnail.
    // 1024x1024 image scaled to ~32x32px :D - them loading times too!
    image: "assets/models/pbr/chair_mat_baseColor_alt.png",
    eventType: ProductConfigurationEvent.Material_TextureSwap,
    tooltip: "Blue chair",
    data: {
      addGlobalLoadingEvent: true,
      animationType: MaterialAnimationType.FromTopToBottom,
      productItem: ikeaChearProduct,
      textureSlot: "map",
      textureUrl: "assets/models/pbr/chair_mat_baseColor_alt.png",
    }
  });
  ikeaChearProduct.selectedSubItem = chearSubItems[0];

  return ikeaChearProduct;
}


export function createIkeaTable(id: number): ProductItem {
  return {
    id,
    name: "table2",
    thumbnail: "assets/models/pbr/thumbnail_ikea_table.png",
    models: [ getIkeaTableModel() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],
    selectableMeshesOptions: [
         {
          includedMeshes: ["Cube.005_Material_0"],
          options: {
           type: SelectedOptionsType.FreeColor,
         },
        },
        {
          includedMeshes: ["Cube_Body_0"],
          options: {
           type: SelectedOptionsType.FreeColor,
         },
        },
        {
          includedMeshes: ["Cylinder_Material_0"],
          options: {
           type: SelectedOptionsType.FreeColor,
         },
        },
        {
          includedMeshes: ["Cube.010_Material_0"],
          options: {
           type: SelectedOptionsType.FreeColor,
         },
        },
      ],
    activeEvents: [],
  };
}

export function createIkeaTableTest(id: number): ProductItem {
  return {
    id,
    name: "test",
    thumbnail: "assets/models/pbr/thumbnail_ikea_table.png",
    models: [ getIkeaTableModel1() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],

    activeEvents: [],
  };
}

export function createIkeaBucketHat(id: number): ProductItem {
  return {
    id,
    name: "test",
    thumbnail: "assets/models/pbr/thumbnail_ikea_table.png",
    models: [ getIkeaBucketHatModel() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],

    activeEvents: [],
  };
}

export function createDay3Cake(id: number): ProductItem {
  return {
    id,
    name: "test",
    thumbnail: "assets/models/pbr/thumbnail_ikea_table.png",
    models: [ getDay3Cake() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],

    activeEvents: [],
  };
}



export function createDoubleChocolateCakeWithSprinkles(id: number): ProductItem {
  return {
    id,
    name: "test",
    thumbnail: "assets/models/double_chocolate_cake_with_sprinkles.png",
    models: [ getDoubleChocolateCakeWithSprinkles() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],
    selectableMeshesOptions: [
      {
       includedMeshes: ["Cylinder001_whippedcream_0"],
       options: {
        type: SelectedOptionsType.FreeColor,
      },
     },
     {
      includedMeshes: ["layer1_cake_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
    {
      includedMeshes: ["cherry_cherry_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
    {
       includedMeshes: ["layer1icing|sprinkle|Dupli|20_sprinkle_0"],
       options: {
        type: SelectedOptionsType.FreeColor,
      },
    },
   ],
    activeEvents: [],
  };
}

export function createCupCake1(id: number): ProductItem {
  return {
    id,
    name: "test",
    thumbnail: "assets/models/free_to_download_handpainted_stylized_cupcake.png",
    models: [ getCupCake1() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],

    activeEvents: [],
  };
}


export function createmug(id: number): ProductItem {
  const selectedOptionsValue: SelectedSpecificTexturesValue = {
    animationType: MaterialAnimationType.FromTopToBottom,
    textures: [
      {
        url: "assets/models/mug/textures/blinn3_baseColor.png",
        thumbnail: "assets/models/mug/textures/blinn3_baseColor.png",

      }, {
        url: "assets/models/mug/textures/blinn6_baseColor.png",
        thumbnail: "assets/models/mug/textures/blinn6_baseColor.png",
      },
    ],
  };

  return {
    id,
    name: "test",
    thumbnail: "assets/models/mug.png",
    models: [ getmug() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],
    selectableMeshesOptions: [
       {
       includedMeshes: ["revolvedSurface1_blinn9_0"],
       options: {
        type: SelectedOptionsType.FreeColor,
      },
     },
     {
      includedMeshes: ["revolvedSurface1_blinn3_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
    {
      includedMeshes: ["revolvedSurface1_blinn4_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
    {
      includedMeshes: ["revolvedSurface1_blinn11_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
    {
      includedMeshes: ["revolvedSurface1_blinn8_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
    {
      includedMeshes: ["revolvedSurface1_blinn6_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
    {
      includedMeshes: ["revolvedSurface1_blinn7_0"],
      options: {
       type: SelectedOptionsType.FreeColor,
     },
    },
 /*  {
      includedMeshes: [ "revolvedSurface1_blinn4_0"],
      noSiblings: false,
      options: {
        type: SelectedOptionsType.SpecificTextures,
        value: selectedOptionsValue,
      },
    }*/
   ],
    activeEvents: [],
  };
}

export function createPopCornBucket(id: number): ProductItem {
  const selectedOptionsValue: SelectedSpecificTexturesValue = {
    animationType: MaterialAnimationType.FromTopToBottom,
    textures: [
      {
        url: "assets/models/mug/textures/blinn3_baseColor.png",
        thumbnail: "assets/models/mug/textures/blinn3_baseColor.png",

      }, {
        url: "assets/models/mug/textures/blinn6_baseColor.png",
        thumbnail: "assets/models/mug/textures/blinn6_baseColor.png",
      },
    ],
  };

  return {
    id,
    name: "test",
    thumbnail: "assets/models/popcorn_bucket.png",
    models: [ getPopCornBucket() ],
    hasFloor: false,
    useGammaSpace: true,
    tooltip: "A quite plastic looking table, but it's wood!!",
    subItems: [],
    selectableMeshesOptions: [
     
    
   {
     includedMeshes: ["popcorn-box.004"],
     options: {
      type: SelectedOptionsType.FreeColor,
    },
   },
   
 /*     {
     includedMeshes: [ "Plane.001"],
     noSiblings: false,
     options: {
       type: SelectedOptionsType.SpecificTextures,
       value: selectedOptionsValue,
     },
   },
   {
    includedMeshes: [ "Plane.001_0"],
    noSiblings: false,
    options: {
      type: SelectedOptionsType.SpecificTextures,
      value: selectedOptionsValue,
    },
  },
  {
    includedMeshes: [ "popcorn1-lp.001"],
    noSiblings: false,
    options: {
      type: SelectedOptionsType.SpecificTextures,
      value: selectedOptionsValue,
    },
  },*/
  ],
    activeEvents: [],
  };
}