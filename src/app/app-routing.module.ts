import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path :'',redirectTo:'login', pathMatch:'full'},
  {path : 'login' , component: LoginComponent},
  {path : 'signup' , component: SignupComponent},
  {path : 'contacts' , component: ContactManagerComponent},
  {path : 'contacts/add' , component : AddContactComponent},
  {path : 'contacts/edit/:contactId' , component:EditContactComponent},
  {path : 'contacts/view/:contactId' , component:ViewContactComponent},
  {path : 'contacts/navbar' , component:NavbarComponent},
  {path : '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
