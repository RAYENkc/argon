import { BrowserModule } from "@angular/platform-browser";
import { ModuleWithProviders, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ViewerThreejsComponent } from "./viewer-threejs/viewer-threejs.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ToolbarProductItemComponent } from "./toolbar/toolbar-product-item/toolbar-product-item.component";
import { ToolbarInstructionsComponent } from "./toolbar/toolbar-instructions/toolbar-instructions.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { ToolbarSubitemComponent } from "./toolbar/toolbar-subitem/toolbar-subitem.component";
import { ToolbarSubitemContainerComponent } from "./toolbar/toolbar-subitem-container/toolbar-subitem-container.component";
import { RouterModule } from "@angular/router";
import { ProductViewerComponent } from "./product-viewer/product-viewer.component";
import { productViewerPageMatcher } from "./product-viewer/product-viewer-page-matcher";
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarFreeColorComponent } from './sidebar/sidebar-free-color/sidebar-free-color.component';
import { SidebarSpecificColorComponent } from './sidebar/sidebar-specific-color/sidebar-specific-color.component';
import { SidebarSpecificTextureComponent } from './sidebar/sidebar-specific-texture/sidebar-specific-texture.component';
import { CartComponent } from './cart/cart.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {  DMWMW_ROUTING, } from "./app.routing";
import { ProductModifierComponent } from './product-modifier/product-modifier.component';
import { HttpClientModule } from "@angular/common/http";
import { ReclamationComponent } from './reclamation/reclamation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommandeComponent } from './commande/commande.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from "@angular/forms";
import { JwtModule } from '@auth0/angular-jwt';
import { OffreComponent } from './offre/offre.component';
import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
const rootRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot([
    { component: ProductViewerComponent, matcher: productViewerPageMatcher },
]);
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ViewerThreejsComponent,
    ToolbarComponent,
    ToolbarProductItemComponent,
    ToolbarInstructionsComponent,
    LoadingSpinnerComponent,
    ToolbarSubitemComponent,
    ToolbarSubitemContainerComponent,
    ProductViewerComponent,
    SidebarComponent,
    SidebarFreeColorComponent,
    SidebarSpecificColorComponent,
    SidebarSpecificTextureComponent,
    CartComponent,
    AccueilComponent,
    ChekoutComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    SigninComponent,
    SignupComponent,
    ProductModifierComponent,
    ReclamationComponent,
    CommandeComponent,
    ProductDetailsComponent,
    OffreComponent,
    MenuComponent,
    ClientComponent,
    SigninAdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
   // rootRouting,
    DMWMW_ROUTING,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  entryComponents:[CommandeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
