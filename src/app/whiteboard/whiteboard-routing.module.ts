import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';


const routes: Routes = [
  { path: '', component: WhiteboardComponent }
  //{ path: ':id', component: DetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhiteboardRoutingModule { }
