import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./app-shell/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./app-shell/grid/grid.module').then(mod => mod.GridModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./app-shell/list/list.module').then(mod => mod.ListModule)
  },
  {
    path: 'master-detail',
    loadChildren: () => import('./app-shell/master-detail/master-detail.module').then(mod => mod.MasterDetailModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.component')
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

