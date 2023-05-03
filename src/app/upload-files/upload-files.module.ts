import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UploadFilesComponent } from './upload-files.component';
import { FilesMenuComponent } from './files-menu/files-menu.component';

@NgModule({
  declarations: [UploadFilesComponent, FilesMenuComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [UploadFilesComponent, FilesMenuComponent],
})
export class UploadFilesModule {}
