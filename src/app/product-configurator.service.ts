import { Injectable, OnDestroy, } from "@angular/core";
import { Subject } from "rxjs";
import { ProductItem } from "./3D/models/ProductItem/ProductItem";
import { createFlowerPot, createRose, createWuffels } from "../mockdata/UnrealisticItems";
import { createCupCake1, createDay3Cake, createDoubleChocolateCakeWithSprinkles, createIkeaBucketHat, createIkeaChear, createIkeaTable, createIkeaTableTest, createmug, createPopCornBucket, createWayfairChair, createWayfairTable } from "../mockdata/RealisticItems";
import { ProductConfigurationEvent } from "./product-configurator-events";
import { LoadingProgressEventData } from "./3D/models/EventData/LoadingProgressEventData";
import { MaterialTextureSwapEventData } from "./3D/models/EventData/MaterialTextureSwapEventData";
import { Mesh } from "three";
import { MaterialColorSwapEventData } from "./3D/models/EventData/MaterialColorSwapEventData";

@Injectable({
  providedIn: "root"
})
export class ProductConfiguratorService implements OnDestroy {
  /**
   * The product items that you can choose between.
   */
  public items: ProductItem[] = [];
  /**
   * The HTML element associated with an item id.
   */
  public itemElements: { [key: string]: HTMLElement } = {};
  /**
   * The currently selected product.
   */
  public selectedProduct: ProductItem | null = null;

  private subjects: Record<ProductConfigurationEvent, Subject<any>> = <any> {};
  // The subjects
  public loading_Started: Subject<void>;
  public loading_Progress: Subject<LoadingProgressEventData>;
  public loading_Finished: Subject<void>;

  public material_ColorSwap: Subject<MaterialColorSwapEventData>;
  public material_TextureSwap: Subject<MaterialTextureSwapEventData>;

  public mesh_Selected: Subject<Mesh>;
  public mesh_Deselected: Subject<Mesh>;
  public mesh_PointerEnter: Subject<Mesh>;
  public mesh_PointerLeave: Subject<Mesh>;

  public selectedProduct_Changed: Subject<ProductItem>;

  public toolbar_ChangeProduct: Subject<ProductItem>;

  constructor() {
    let id = 0;

    // Who needs a database!
    this.items.push(createFlowerPot("6277d48f03f90689cb25a3c2"));
    this.items.push(createRose("id++"));
    this.items.push(createWuffels("id++"));
    this.items.push(createWayfairTable(id++));
    this.items.push(createWayfairChair(id++));
    this.items.push(createIkeaChear(id++));
    this.items.push(createIkeaTable(id++));
    this.items.push(createIkeaTableTest(id++));
    this.items.push(createIkeaBucketHat(id++));
    this.items.push(createDay3Cake(id++));
    this.items.push(createDoubleChocolateCakeWithSprinkles(id++));
    this.items.push(createCupCake1(id++));
    this.items.push(createmug(id++));
    this.items.push(createPopCornBucket(id++));

    this.loading_Started = this.createSubject<void>(ProductConfigurationEvent.Loading_Started);
    this.loading_Progress = this.createSubject<LoadingProgressEventData>(ProductConfigurationEvent.Loading_Progress);
    this.loading_Finished = this.createSubject<void>(ProductConfigurationEvent.Loading_Finished);

    this.material_ColorSwap = this.createSubject<MaterialColorSwapEventData>(ProductConfigurationEvent.Material_ColorSwap);
    this.material_TextureSwap = this.createSubject<MaterialTextureSwapEventData>(ProductConfigurationEvent.Material_TextureSwap);

    this.mesh_Selected = this.createSubject<Mesh>(ProductConfigurationEvent.Mesh_Selected);
    this.mesh_Deselected = this.createSubject<Mesh>(ProductConfigurationEvent.Mesh_Deselected);
    this.mesh_PointerEnter = this.createSubject<Mesh>(ProductConfigurationEvent.Mesh_PointerEnter);
    this.mesh_PointerLeave = this.createSubject<Mesh>(ProductConfigurationEvent.Mesh_PointerLeave);

    this.selectedProduct_Changed = this.createSubject<ProductItem>(ProductConfigurationEvent.SelectedProduct_Changed);

    this.toolbar_ChangeProduct = this.createSubject<ProductItem>(ProductConfigurationEvent.Toolbar_ChangeProduct);
  }

  public ngOnDestroy(): void {
    const keys = Object.keys(this.subjects);
    for (const key of keys) {
      const subject = this.subjects[key] as Subject<any>;
      if (!subject) {
        continue;
      }

      subject.complete();
      subject.unsubscribe();
      delete this.subjects[key];
    }
  }

  public dispatch<T = any>(eventType: ProductConfigurationEvent, data?: T): void {
    if (!this.subjects[eventType]) {
      return;
    }

    this.subjects[eventType].next(data);
  }

  public getSelectedProductElement(product: ProductItem): HTMLElement | undefined {
    if (!product) {
      return undefined;
    }

    return this.itemElements[product.name];
  }

  private createSubject<T>(eventType: ProductConfigurationEvent): Subject<T> {
    const subject = new Subject<T>();
    this.subjects[eventType] = subject;
    return subject;
  }
}
