import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { OwnerComponent } from './components/owner/owner.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'tools', component: ToolListComponent },
      { path: 'owners', component: OwnerComponent },
      { path: '', component: ToolListComponent, pathMatch:'full' },
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
