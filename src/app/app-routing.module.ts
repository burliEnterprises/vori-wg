import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'boards',
    loadChildren: () =>
      import('./boards/boards.module').then(m => m.BoardsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'blacklist',
    loadChildren: () =>
      import('./blacklist/blacklist.module').then(m => m.BlacklistModule),
  },
  {
    path: 'whiteboard',
    loadChildren: () =>
      import('./whiteboard/whiteboard.module').then(m => m.WhiteboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
