import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CartComponent } from './cart/cart.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { CommandeComponent } from './commande/commande.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OffreComponent } from './offre/offre.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductModifierComponent } from './product-modifier/product-modifier.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ShopComponent } from './shop/shop.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { 
    AuthenticationGuard as AuthGuard 
  } from './authentication.guard';
import { ClientComponent } from './client/client.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
const routes: Routes = [

{path: '', redirectTo: 'home', pathMatch: 'full' },
//, canActivate: [AuthGuard] 
{path: 'home', component:HomeComponent},
{path: 'footer', component:FooterComponent},
{path: 'cart', component:CartComponent},
{path: 'shop', component:ShopComponent},
{path: 'checkout', component:ChekoutComponent},
{path: 'product-configuator/:id', component: ProductViewerComponent},
{path: 'signin', component:SigninComponent},
{path: 'signup', component:SignupComponent},
{path: 'accueil', component:AccueilComponent},
{path: 'product-modifier', component: ProductModifierComponent},
{path: 'reclamation', component: ReclamationComponent},
{path: 'command', component: CommandeComponent},
{path: 'product-details', component: ProductDetailsComponent},
{path: 'offre', component: OffreComponent},
{path: 'client', component: ClientComponent},
{path: 'signinadmin', component: SigninAdminComponent},

];

export const DMWMW_ROUTING = RouterModule.forRoot(routes);