import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Components/Auth/auth.component';
import { HomeLayoutComponent } from './Components/HomeLayout/home-layout.component';
import { MenuComponent } from './Components/HomeLayout/MenuComponent/menu.component';
import { EditorComponent } from './Components/HomeLayout/EditorComponent/editor.component';
import { ArchiveComponent } from './Components/HomeLayout/ArchiveComponent/archive.component';
import { AuthGuardService as AuthGuard } from './Authorization/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: EditorComponent , canActivate: [AuthGuard]},
      { path: 'menu', component: MenuComponent , canActivate: [AuthGuard]},
      { path: 'archive', component: ArchiveComponent , canActivate: [AuthGuard]},
    ]
  },
  { path: 'auth/:auth', component: AuthComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
