import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarEditComponent } from './pages/avatar/avatar-edit/avatar-edit.component';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';

const routes: Routes = [
  {path: 'avatar', component: AvatarListComponent},
  {path: 'itensServidor', component: ServersListComponent},
  {path: 'updateAvatar', component: AvatarEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
