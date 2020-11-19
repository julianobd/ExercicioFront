import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';

const routes: Routes = [
  {path: 'avatar', component: AvatarListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
