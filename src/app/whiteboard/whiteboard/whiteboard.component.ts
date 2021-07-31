import { Component, OnInit } from '@angular/core';
import { NgWhiteboardService, FormatType, formatTypes } from 'ng-whiteboard';
// https://github.com/mostafazke/ng-whiteboard/blob/master/projects/demo/src/app/app.component.ts

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit {

  color = '#eee';
  backgroundColor = '#333333';
  size = '5px';
  isSizeActive = false;
  isSaveActive = false;
  formatType = FormatType;

  constructor(private whiteboardService: NgWhiteboardService) {
   }

  ngOnInit(): void {
  }

  onInit() {
    console.log('Init!');
  }
  onClear() {
    console.log('Clear!');
  }
  onUndo() {
    console.log('Undo!');
  }
  onRedo() {
    console.log('Redo!');
  }
  onSave(img: string) {
    console.log('Save!');

    // Copy to clipboard
    const cb = navigator.clipboard;
    if (cb) {
      cb.writeText(img);
    }
  }

  onImageAdded() {
    console.log('ImageAdded!');
  }

  erase() {
    this.whiteboardService.erase();
  }
  setSize(size) {
    this.size = size;
    this.isSizeActive = false;
  }
  save(type: formatTypes) {
    this.whiteboardService.save(type);
    this.isSaveActive = false;
  }


  /**
   * Undo the change
   */
  undo() {
    this.whiteboardService.undo();
  }


  /**
   * Redo the change
   */
  redo() {
    this.whiteboardService.redo();
  }


  /**
   * Add image to canvas
   * @param fileInput the file from the input field
   */
  addImage(fileInput) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.whiteboardService.addImage(reader.result);
      fileInput.value = '';
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

}
