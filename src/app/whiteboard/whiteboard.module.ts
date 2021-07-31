import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { WhiteboardRoutingModule } from './whiteboard-routing.module';

import { NgWhiteboardModule } from 'ng-whiteboard';

@NgModule({
  declarations: [
    WhiteboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    WhiteboardRoutingModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
    NgWhiteboardModule
  ]
})
export class WhiteboardModule {}
